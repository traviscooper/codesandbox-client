import {
  Step,
  PaymentSummary,
  PaymentPreview,
  LegacyPricing,
  Pricing,
} from './types';

type State = {
  step: Step;
  seats: number;
  isPaddleInitialised: boolean;
  isBillingAmountLoaded: boolean;
  summary: PaymentSummary | null;
  paymentPreview: PaymentPreview | null;
  updatingSubscription: boolean;
  legacyPrices: LegacyPricing | null;
  prices: Pricing | null;
};

export const state: State = {
  step: Step.WorkspacePlanSelection,
  seats: 1,
  isPaddleInitialised: false,
  isBillingAmountLoaded: false,
  summary: null,
  paymentPreview: null,
  updatingSubscription: false,
  legacyPrices: null,
  prices: null,
};
