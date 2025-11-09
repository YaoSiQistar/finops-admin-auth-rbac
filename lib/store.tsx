"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";

export type CostItem = {
  date: string; // YYYY-MM-DD
  provider: string;
  service: string;
  env: string;
  team: string;
  cost: number;
  currency: string;
};

export type Budget = {
  id: string;
  name: string;
  scope: { env?: string; service?: string; team?: string };
  period: "monthly" | "quarterly";
  amount: number;
  currency: string;
  notifyPct: number[]; // [80,100,120]
};

type State = {
  costs: CostItem[];
  budgets: Budget[];
};

type Action =
  | { type: "LOAD_SAMPLE"; payload: CostItem[] }
  | { type: "IMPORT_COSTS"; payload: CostItem[] }
  | { type: "ADD_BUDGET"; payload: Budget }
  | { type: "REMOVE_BUDGET"; payload: string }
  | { type: "LOAD_FROM_STORAGE"; payload: State };

const initial: State = { costs: [], budgets: [] };

const Ctx = createContext<{ state: State; dispatch: React.Dispatch<Action> } | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "LOAD_SAMPLE":
      return { ...state, costs: action.payload };
    case "IMPORT_COSTS":
      return { ...state, costs: [...state.costs, ...action.payload] };
    case "ADD_BUDGET":
      return { ...state, budgets: [...state.budgets, action.payload] };
    case "REMOVE_BUDGET":
      return { ...state, budgets: state.budgets.filter(b => b.id !== action.payload) };
    case "LOAD_FROM_STORAGE":
      return action.payload;
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    const raw = localStorage.getItem("finops-admin-state");
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as State;
        dispatch({ type: "LOAD_FROM_STORAGE", payload: parsed });
      } catch {}
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("finops-admin-state", JSON.stringify(state));
  }, [state]);

  return <Ctx.Provider value={{ state, dispatch }}>{children}</Ctx.Provider>;
}

export function useApp() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}

// helpers
export function matchScope(item: CostItem, scope: Budget["scope"]) {
  return (!scope.env || item.env === scope.env) &&
         (!scope.service || item.service === scope.service) &&
         (!scope.team || item.team === scope.team);
}
