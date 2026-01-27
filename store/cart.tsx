"use client";

import React, { createContext, useContext, useMemo, useReducer } from "react";
import type { MenuItem, Plan } from "@/lib/types";

type CartLine = {
  item: MenuItem;
  qty: number;
};

type State = {
  plan: Plan;
  lines: CartLine[];
  drawerOpen: boolean;
};

type Action =
  | { type: "set_plan"; plan: Plan }
  | { type: "add"; item: MenuItem }
  | { type: "remove"; id: string }
  | { type: "set_qty"; id: string; qty: number }
  | { type: "toggle_drawer"; open?: boolean }
  | { type: "clear" };

const DEFAULT_PLAN: Plan = { mealsPerWeek: 6, deliveryCycle: "毎週" };

const initialState: State = {
  plan: DEFAULT_PLAN,
  lines: [],
  drawerOpen: false
};

function clampQty(qty: number) {
  if (qty < 1) return 1;
  if (qty > 99) return 99;
  return qty;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "set_plan":
      return { ...state, plan: action.plan };
    case "add": {
      const existing = state.lines.find((l) => l.item.id === action.item.id);
      const lines = existing
        ? state.lines.map((l) =>
            l.item.id === action.item.id ? { ...l, qty: clampQty(l.qty + 1) } : l
          )
        : [...state.lines, { item: action.item, qty: 1 }];
      return { ...state, lines, drawerOpen: true };
    }
    case "remove":
      return { ...state, lines: state.lines.filter((l) => l.item.id !== action.id) };
    case "set_qty":
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.item.id === action.id ? { ...l, qty: clampQty(action.qty) } : l
        )
      };
    case "toggle_drawer":
      return { ...state, drawerOpen: action.open ?? !state.drawerOpen };
    case "clear":
      return { ...state, lines: [], drawerOpen: false };
    default:
      return state;
  }
}

type Ctx = {
  state: State;
  setPlan: (plan: Plan) => void;
  add: (item: MenuItem) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  toggleDrawer: (open?: boolean) => void;
  subtotal: number;
  lineCount: number;
};

const CartContext = createContext<Ctx | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const subtotal = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.item.price * l.qty, 0),
    [state.lines]
  );

  const lineCount = useMemo(
    () => state.lines.reduce((sum, l) => sum + l.qty, 0),
    [state.lines]
  );

  const value: Ctx = {
    state,
    setPlan: (plan) => dispatch({ type: "set_plan", plan }),
    add: (item) => dispatch({ type: "add", item }),
    remove: (id) => dispatch({ type: "remove", id }),
    setQty: (id, qty) => dispatch({ type: "set_qty", id, qty }),
    toggleDrawer: (open) => dispatch({ type: "toggle_drawer", open }),
    subtotal,
    lineCount
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
