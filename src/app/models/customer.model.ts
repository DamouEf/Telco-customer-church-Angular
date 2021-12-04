export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
export enum Bool {
  YES = 'yes',
  NO = 'no',
}
export enum MultipleLines {
  YES = 'yes',
  NO = 'no',
  NO_PHONE_SERVICE = 'no phone service'
}
export enum InternetService {
  DSL = 'dsl',
  FIBRE = 'fibre optic',
  NO = 'no'
}
export enum Internet {
  YES = 'yes',
  NO = 'no',
  NO_INTERNET_SERVICE = 'no internet service',
}
export enum Contract {
  MONTH_TO_MONTH = 'month-to-month',
  ONE_YEAR = 'one year',
  TWO_YEAR = 'two year'
}
export enum PaymentMethod {
  BANK_TRANSFERT = 'bank transfer (automatic)',
  CREDIT_CARD = 'credit card (automatic)',
  ELECTRONIC_CHECK = 'electronic check',
  MAILED_CHECK = 'mailed check'
}

export interface Customer {
  gender?: Gender,
  senior_citizen?: Bool,
  partner?: Bool,
  dependents?: Bool,
  tenure?: number,
  phone_service?: Bool,
  multiple_lines?: MultipleLines,
  internet_service?: InternetService ,
  online_security?: Internet,
  online_backup?:  Internet,
  device_protection?: Internet,
  tech_support?: Internet,
  streaming_tv?: Internet,
  streaming_movies?: Internet,
  contract?: Contract,
  paperless_billing?: Bool,
  payment_method?: PaymentMethod,
  monthly_charges?: number,
  totales_charges?: number,
}


