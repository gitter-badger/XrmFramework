/// <reference path="../_internal/sdk.d.ts" />
/// <reference path="../dg.xrmquery.rest.d.ts" />
/// <reference path="../_internal/rest-entities.d.ts" />
/// <reference path="../_internal/EntityEnum/contact.d.ts" />
declare namespace RestAPI {
  interface ContactBase extends RestEntity {
    EMailAddress2?: string | null;
    EMailAddress1?: string | null;
    Address3_AddressTypeCode?: SDK.OptionSet<contact_address3_addresstypecode> | null;
    Address1_City?: string | null;
    Address3_Line1?: string | null;
    Address1_Line1?: string | null;
    Address1_Longitude?: string | null;
    ModifiedOn?: Date | null;
    Aging90?: SDK.Money | null;
    OverriddenCreatedOn?: Date | null;
    DoNotPostalMail?: boolean | null;
    Address1_AddressTypeCode?: SDK.OptionSet<contact_address1_addresstypecode> | null;
    Address3_Line2?: string | null;
    Aging30?: SDK.Money | null;
    Address3_Telephone1?: string | null;
    Address3_Line3?: string | null;
    DoNotSendMM?: boolean | null;
    Address2_County?: string | null;
    CreditOnHold?: boolean | null;
    DoNotBulkPostalMail?: boolean | null;
    Aging60_Base?: SDK.Money | null;
    AccountRoleCode?: SDK.OptionSet<contact_accountrolecode> | null;
    Address1_ShippingMethodCode?: SDK.OptionSet<contact_address1_shippingmethodcode> | null;
    CreatedBy?: SDK.EntityReference | null;
    GenderCode?: SDK.OptionSet<contact_gendercode> | null;
    Address3_UTCOffset?: number | null;
    ExternalUserIdentifier?: string | null;
    Address3_PrimaryContactName?: string | null;
    OriginatingLeadId?: SDK.EntityReference | null;
    OwningBusinessUnit?: SDK.EntityReference | null;
    PreferredAppointmentTimeCode?: SDK.OptionSet<contact_preferredappointmenttimecode> | null;
    Address2_StateOrProvince?: string | null;
    MobilePhone?: string | null;
    Address2_Country?: string | null;
    Address2_Line2?: string | null;
    Address3_StateOrProvince?: string | null;
    ModifiedOnBehalfBy?: SDK.EntityReference | null;
    SLAId?: SDK.EntityReference | null;
    AssistantPhone?: string | null;
    ParentContactId?: SDK.EntityReference | null;
    StatusCode?: SDK.OptionSet<contact_statuscode> | null;
    OnHoldTime?: number | null;
    Address3_Longitude?: string | null;
    CreditLimit?: SDK.Money | null;
    BirthDate?: Date | null;
    Address1_UTCOffset?: number | null;
    ManagerPhone?: string | null;
    EmployeeId?: string | null;
    VersionNumber?: number | null;
    Address3_UPSZone?: string | null;
    Telephone1?: string | null;
    CustomerTypeCode?: SDK.OptionSet<contact_customertypecode> | null;
    ExchangeRate?: string | null;
    Address3_Composite?: string | null;
    IsPrivate?: boolean | null;
    Telephone3?: string | null;
    CustomerSizeCode?: SDK.OptionSet<contact_customersizecode> | null;
    PreferredContactMethodCode?: SDK.OptionSet<contact_preferredcontactmethodcode> | null;
    ChildrensNames?: string | null;
    Address2_Latitude?: string | null;
    CreatedOn?: Date | null;
    DoNotBulkEMail?: boolean | null;
    DoNotFax?: boolean | null;
    AnnualIncome_Base?: SDK.Money | null;
    Aging90_Base?: SDK.Money | null;
    Address1_Composite?: string | null;
    FirstName?: string | null;
    CreatedOnBehalfBy?: SDK.EntityReference | null;
    Address2_FreightTermsCode?: SDK.OptionSet<contact_address2_freighttermscode> | null;
    Callback?: string | null;
    dg_TestAccount?: SDK.EntityReference | null;
    Address2_PostalCode?: string | null;
    EducationCode?: SDK.OptionSet<contact_educationcode> | null;
    LastUsedInCampaign?: Date | null;
    UTCConversionTimeZoneCode?: number | null;
    ProcessId?: string | null;
    GovernmentId?: string | null;
    IsAutoCreate?: boolean | null;
    Address2_Line3?: string | null;
    Description?: string | null;
    ModifiedBy?: SDK.EntityReference | null;
    TimeZoneRuleVersionNumber?: number | null;
    SpousesName?: string | null;
    Address1_County?: string | null;
    Address3_FreightTermsCode?: SDK.OptionSet<contact_address3_freighttermscode> | null;
    DoNotEMail?: boolean | null;
    Address3_County?: string | null;
    Pager?: string | null;
    Address2_PostOfficeBox?: string | null;
    Address2_Telephone1?: string | null;
    Address2_Telephone2?: string | null;
    Address2_Telephone3?: string | null;
    Aging60?: SDK.Money | null;
    Address1_AddressId?: string | null;
    TraversedPath?: string | null;
    Address1_FreightTermsCode?: SDK.OptionSet<contact_address1_freighttermscode> | null;
    AnnualIncome?: SDK.Money | null;
    OwningUser?: SDK.EntityReference | null;
    WebSiteUrl?: string | null;
    Address2_Name?: string | null;
    MiddleName?: string | null;
    Address3_Telephone2?: string | null;
    EntityImageId?: string | null;
    DoNotPhone?: boolean | null;
    Address3_ShippingMethodCode?: SDK.OptionSet<contact_address3_shippingmethodcode> | null;
    Address2_Composite?: string | null;
    Address1_Country?: string | null;
    OwningTeam?: SDK.EntityReference | null;
    Address1_StateOrProvince?: string | null;
    PaymentTermsCode?: SDK.OptionSet<contact_paymenttermscode> | null;
    PreferredEquipmentId?: SDK.EntityReference | null;
    Address1_Line3?: string | null;
    SLAInvokedId?: SDK.EntityReference | null;
    JobTitle?: string | null;
    NickName?: string | null;
    TransactionCurrencyId?: SDK.EntityReference | null;
    ManagerName?: string | null;
    Address1_Telephone1?: string | null;
    Address1_Telephone2?: string | null;
    Address1_Telephone3?: string | null;
    IsBackofficeCustomer?: boolean | null;
    ContactId?: string | null;
    Address2_UTCOffset?: number | null;
    Suffix?: string | null;
    Fax?: string | null;
    MasterId?: SDK.EntityReference | null;
    AssistantName?: string | null;
    OwnerId?: SDK.EntityReference | null;
    Address3_Country?: string | null;
    ParticipatesInWorkflow?: boolean | null;
    CreditLimit_Base?: SDK.Money | null;
    Address2_Fax?: string | null;
    Merged?: boolean | null;
    Address2_Longitude?: string | null;
    ModifiedByExternalParty?: SDK.EntityReference | null;
    DefaultPriceLevelId?: SDK.EntityReference | null;
    AccountId?: SDK.EntityReference | null;
    Address3_Latitude?: string | null;
    Address1_PrimaryContactName?: string | null;
    StateCode?: SDK.OptionSet<contact_statecode> | null;
    LastOnHoldTime?: Date | null;
    Address1_Line2?: string | null;
    Company?: string | null;
    ParentCustomerId?: SDK.EntityReference | null;
    Address2_AddressTypeCode?: SDK.OptionSet<contact_address2_addresstypecode> | null;
    Address2_UPSZone?: string | null;
    Address3_Name?: string | null;
    Address3_Fax?: string | null;
    Salutation?: string | null;
    Address1_PostalCode?: string | null;
    CreatedByExternalParty?: SDK.EntityReference | null;
    StageId?: string | null;
    Address3_Telephone3?: string | null;
    Address3_PostalCode?: string | null;
    PreferredAppointmentDayCode?: SDK.OptionSet<contact_preferredappointmentdaycode> | null;
    PreferredServiceId?: SDK.EntityReference | null;
    Address2_AddressId?: string | null;
    Home2?: string | null;
    Anniversary?: Date | null;
    ImportSequenceNumber?: number | null;
    Address2_City?: string | null;
    HasChildrenCode?: SDK.OptionSet<contact_haschildrencode> | null;
    Telephone2?: string | null;
    SubscriptionId?: string | null;
    FamilyStatusCode?: SDK.OptionSet<contact_familystatuscode> | null;
    Department?: string | null;
    Address3_City?: string | null;
    Business2?: string | null;
    PreferredSystemUserId?: SDK.EntityReference | null;
    Aging30_Base?: SDK.Money | null;
    Address1_Name?: string | null;
    Address1_Fax?: string | null;
    Address1_Latitude?: string | null;
    Address2_ShippingMethodCode?: SDK.OptionSet<contact_address2_shippingmethodcode> | null;
    EMailAddress3?: string | null;
    Address3_PostOfficeBox?: string | null;
    LeadSourceCode?: SDK.OptionSet<contact_leadsourcecode> | null;
    Address2_Line1?: string | null;
    Address1_UPSZone?: string | null;
    LastName?: string | null;
    ShippingMethodCode?: SDK.OptionSet<contact_shippingmethodcode> | null;
    TerritoryCode?: SDK.OptionSet<contact_territorycode> | null;
    FtpSiteUrl?: string | null;
    NumberOfChildren?: number | null;
    Address1_PostOfficeBox?: string | null;
    Address2_PrimaryContactName?: string | null;
    FullName?: string | null;
    Address3_AddressId?: string | null;
  }
  interface Contact extends ContactBase {
    Contact_Tasks?: Task[] | null;
    Referencedcontact_master_contact?: Contact[] | null;
    account_primary_contact?: Account[] | null;
    Referencedcontact_customer_contacts?: Contact[] | null;
    Referencingcontact_master_contact?: Contact | null;
    contact_customer_accounts?: Account | null;
    Referencingcontact_customer_contacts?: Contact | null;
    dg_account_contact_TestAccount?: Account | null;
    dg_account_contact?: Account[] | null;
  }
  interface ContactResult extends ContactBase {
    Contact_Tasks?: SDK.Results<TaskResult> | null;
    Referencedcontact_master_contact?: SDK.Results<ContactResult> | null;
    account_primary_contact?: SDK.Results<AccountResult> | null;
    Referencedcontact_customer_contacts?: SDK.Results<ContactResult> | null;
    Referencingcontact_master_contact?: Contact | null;
    contact_customer_accounts?: Account | null;
    Referencingcontact_customer_contacts?: Contact | null;
    dg_account_contact_TestAccount?: Account | null;
    dg_account_contact?: SDK.Results<AccountResult> | null;
  }
  interface Contact_Select extends Contact_Expand {
    EMailAddress2: RestAttribute<Contact_Select>;
    EMailAddress1: RestAttribute<Contact_Select>;
    Address3_AddressTypeCode: RestAttribute<Contact_Select>;
    Address1_City: RestAttribute<Contact_Select>;
    Address3_Line1: RestAttribute<Contact_Select>;
    Address1_Line1: RestAttribute<Contact_Select>;
    Address1_Longitude: RestAttribute<Contact_Select>;
    ModifiedOn: RestAttribute<Contact_Select>;
    Aging90: RestAttribute<Contact_Select>;
    OverriddenCreatedOn: RestAttribute<Contact_Select>;
    DoNotPostalMail: RestAttribute<Contact_Select>;
    Address1_AddressTypeCode: RestAttribute<Contact_Select>;
    Address3_Line2: RestAttribute<Contact_Select>;
    Aging30: RestAttribute<Contact_Select>;
    Address3_Telephone1: RestAttribute<Contact_Select>;
    Address3_Line3: RestAttribute<Contact_Select>;
    DoNotSendMM: RestAttribute<Contact_Select>;
    Address2_County: RestAttribute<Contact_Select>;
    CreditOnHold: RestAttribute<Contact_Select>;
    DoNotBulkPostalMail: RestAttribute<Contact_Select>;
    Aging60_Base: RestAttribute<Contact_Select>;
    AccountRoleCode: RestAttribute<Contact_Select>;
    Address1_ShippingMethodCode: RestAttribute<Contact_Select>;
    CreatedBy: RestAttribute<Contact_Select>;
    GenderCode: RestAttribute<Contact_Select>;
    Address3_UTCOffset: RestAttribute<Contact_Select>;
    ExternalUserIdentifier: RestAttribute<Contact_Select>;
    Address3_PrimaryContactName: RestAttribute<Contact_Select>;
    OriginatingLeadId: RestAttribute<Contact_Select>;
    OwningBusinessUnit: RestAttribute<Contact_Select>;
    PreferredAppointmentTimeCode: RestAttribute<Contact_Select>;
    Address2_StateOrProvince: RestAttribute<Contact_Select>;
    MobilePhone: RestAttribute<Contact_Select>;
    Address2_Country: RestAttribute<Contact_Select>;
    Address2_Line2: RestAttribute<Contact_Select>;
    Address3_StateOrProvince: RestAttribute<Contact_Select>;
    ModifiedOnBehalfBy: RestAttribute<Contact_Select>;
    SLAId: RestAttribute<Contact_Select>;
    AssistantPhone: RestAttribute<Contact_Select>;
    ParentContactId: RestAttribute<Contact_Select>;
    StatusCode: RestAttribute<Contact_Select>;
    OnHoldTime: RestAttribute<Contact_Select>;
    Address3_Longitude: RestAttribute<Contact_Select>;
    CreditLimit: RestAttribute<Contact_Select>;
    BirthDate: RestAttribute<Contact_Select>;
    Address1_UTCOffset: RestAttribute<Contact_Select>;
    ManagerPhone: RestAttribute<Contact_Select>;
    EmployeeId: RestAttribute<Contact_Select>;
    VersionNumber: RestAttribute<Contact_Select>;
    Address3_UPSZone: RestAttribute<Contact_Select>;
    Telephone1: RestAttribute<Contact_Select>;
    CustomerTypeCode: RestAttribute<Contact_Select>;
    ExchangeRate: RestAttribute<Contact_Select>;
    Address3_Composite: RestAttribute<Contact_Select>;
    IsPrivate: RestAttribute<Contact_Select>;
    Telephone3: RestAttribute<Contact_Select>;
    CustomerSizeCode: RestAttribute<Contact_Select>;
    PreferredContactMethodCode: RestAttribute<Contact_Select>;
    ChildrensNames: RestAttribute<Contact_Select>;
    Address2_Latitude: RestAttribute<Contact_Select>;
    CreatedOn: RestAttribute<Contact_Select>;
    DoNotBulkEMail: RestAttribute<Contact_Select>;
    DoNotFax: RestAttribute<Contact_Select>;
    AnnualIncome_Base: RestAttribute<Contact_Select>;
    Aging90_Base: RestAttribute<Contact_Select>;
    Address1_Composite: RestAttribute<Contact_Select>;
    FirstName: RestAttribute<Contact_Select>;
    CreatedOnBehalfBy: RestAttribute<Contact_Select>;
    Address2_FreightTermsCode: RestAttribute<Contact_Select>;
    Callback: RestAttribute<Contact_Select>;
    dg_TestAccount: RestAttribute<Contact_Select>;
    Address2_PostalCode: RestAttribute<Contact_Select>;
    EducationCode: RestAttribute<Contact_Select>;
    LastUsedInCampaign: RestAttribute<Contact_Select>;
    UTCConversionTimeZoneCode: RestAttribute<Contact_Select>;
    ProcessId: RestAttribute<Contact_Select>;
    GovernmentId: RestAttribute<Contact_Select>;
    IsAutoCreate: RestAttribute<Contact_Select>;
    Address2_Line3: RestAttribute<Contact_Select>;
    Description: RestAttribute<Contact_Select>;
    ModifiedBy: RestAttribute<Contact_Select>;
    TimeZoneRuleVersionNumber: RestAttribute<Contact_Select>;
    SpousesName: RestAttribute<Contact_Select>;
    Address1_County: RestAttribute<Contact_Select>;
    Address3_FreightTermsCode: RestAttribute<Contact_Select>;
    DoNotEMail: RestAttribute<Contact_Select>;
    Address3_County: RestAttribute<Contact_Select>;
    Pager: RestAttribute<Contact_Select>;
    Address2_PostOfficeBox: RestAttribute<Contact_Select>;
    Address2_Telephone1: RestAttribute<Contact_Select>;
    Address2_Telephone2: RestAttribute<Contact_Select>;
    Address2_Telephone3: RestAttribute<Contact_Select>;
    Aging60: RestAttribute<Contact_Select>;
    Address1_AddressId: RestAttribute<Contact_Select>;
    TraversedPath: RestAttribute<Contact_Select>;
    Address1_FreightTermsCode: RestAttribute<Contact_Select>;
    AnnualIncome: RestAttribute<Contact_Select>;
    OwningUser: RestAttribute<Contact_Select>;
    WebSiteUrl: RestAttribute<Contact_Select>;
    Address2_Name: RestAttribute<Contact_Select>;
    MiddleName: RestAttribute<Contact_Select>;
    Address3_Telephone2: RestAttribute<Contact_Select>;
    EntityImageId: RestAttribute<Contact_Select>;
    DoNotPhone: RestAttribute<Contact_Select>;
    Address3_ShippingMethodCode: RestAttribute<Contact_Select>;
    Address2_Composite: RestAttribute<Contact_Select>;
    Address1_Country: RestAttribute<Contact_Select>;
    OwningTeam: RestAttribute<Contact_Select>;
    Address1_StateOrProvince: RestAttribute<Contact_Select>;
    PaymentTermsCode: RestAttribute<Contact_Select>;
    PreferredEquipmentId: RestAttribute<Contact_Select>;
    Address1_Line3: RestAttribute<Contact_Select>;
    SLAInvokedId: RestAttribute<Contact_Select>;
    JobTitle: RestAttribute<Contact_Select>;
    NickName: RestAttribute<Contact_Select>;
    TransactionCurrencyId: RestAttribute<Contact_Select>;
    ManagerName: RestAttribute<Contact_Select>;
    Address1_Telephone1: RestAttribute<Contact_Select>;
    Address1_Telephone2: RestAttribute<Contact_Select>;
    Address1_Telephone3: RestAttribute<Contact_Select>;
    IsBackofficeCustomer: RestAttribute<Contact_Select>;
    ContactId: RestAttribute<Contact_Select>;
    Address2_UTCOffset: RestAttribute<Contact_Select>;
    Suffix: RestAttribute<Contact_Select>;
    Fax: RestAttribute<Contact_Select>;
    MasterId: RestAttribute<Contact_Select>;
    AssistantName: RestAttribute<Contact_Select>;
    OwnerId: RestAttribute<Contact_Select>;
    Address3_Country: RestAttribute<Contact_Select>;
    ParticipatesInWorkflow: RestAttribute<Contact_Select>;
    CreditLimit_Base: RestAttribute<Contact_Select>;
    Address2_Fax: RestAttribute<Contact_Select>;
    Merged: RestAttribute<Contact_Select>;
    Address2_Longitude: RestAttribute<Contact_Select>;
    ModifiedByExternalParty: RestAttribute<Contact_Select>;
    DefaultPriceLevelId: RestAttribute<Contact_Select>;
    AccountId: RestAttribute<Contact_Select>;
    Address3_Latitude: RestAttribute<Contact_Select>;
    Address1_PrimaryContactName: RestAttribute<Contact_Select>;
    StateCode: RestAttribute<Contact_Select>;
    LastOnHoldTime: RestAttribute<Contact_Select>;
    Address1_Line2: RestAttribute<Contact_Select>;
    Company: RestAttribute<Contact_Select>;
    ParentCustomerId: RestAttribute<Contact_Select>;
    Address2_AddressTypeCode: RestAttribute<Contact_Select>;
    Address2_UPSZone: RestAttribute<Contact_Select>;
    Address3_Name: RestAttribute<Contact_Select>;
    Address3_Fax: RestAttribute<Contact_Select>;
    Salutation: RestAttribute<Contact_Select>;
    Address1_PostalCode: RestAttribute<Contact_Select>;
    CreatedByExternalParty: RestAttribute<Contact_Select>;
    StageId: RestAttribute<Contact_Select>;
    Address3_Telephone3: RestAttribute<Contact_Select>;
    Address3_PostalCode: RestAttribute<Contact_Select>;
    PreferredAppointmentDayCode: RestAttribute<Contact_Select>;
    PreferredServiceId: RestAttribute<Contact_Select>;
    Address2_AddressId: RestAttribute<Contact_Select>;
    Home2: RestAttribute<Contact_Select>;
    Anniversary: RestAttribute<Contact_Select>;
    ImportSequenceNumber: RestAttribute<Contact_Select>;
    Address2_City: RestAttribute<Contact_Select>;
    HasChildrenCode: RestAttribute<Contact_Select>;
    Telephone2: RestAttribute<Contact_Select>;
    SubscriptionId: RestAttribute<Contact_Select>;
    FamilyStatusCode: RestAttribute<Contact_Select>;
    Department: RestAttribute<Contact_Select>;
    Address3_City: RestAttribute<Contact_Select>;
    Business2: RestAttribute<Contact_Select>;
    PreferredSystemUserId: RestAttribute<Contact_Select>;
    Aging30_Base: RestAttribute<Contact_Select>;
    Address1_Name: RestAttribute<Contact_Select>;
    Address1_Fax: RestAttribute<Contact_Select>;
    Address1_Latitude: RestAttribute<Contact_Select>;
    Address2_ShippingMethodCode: RestAttribute<Contact_Select>;
    EMailAddress3: RestAttribute<Contact_Select>;
    Address3_PostOfficeBox: RestAttribute<Contact_Select>;
    LeadSourceCode: RestAttribute<Contact_Select>;
    Address2_Line1: RestAttribute<Contact_Select>;
    Address1_UPSZone: RestAttribute<Contact_Select>;
    LastName: RestAttribute<Contact_Select>;
    ShippingMethodCode: RestAttribute<Contact_Select>;
    TerritoryCode: RestAttribute<Contact_Select>;
    FtpSiteUrl: RestAttribute<Contact_Select>;
    NumberOfChildren: RestAttribute<Contact_Select>;
    Address1_PostOfficeBox: RestAttribute<Contact_Select>;
    Address2_PrimaryContactName: RestAttribute<Contact_Select>;
    FullName: RestAttribute<Contact_Select>;
    Address3_AddressId: RestAttribute<Contact_Select>;
  }
  interface Contact_Filter {
    EMailAddress2: string;
    EMailAddress1: string;
    Address3_AddressTypeCode: XQR.ValueContainerFilter<contact_address3_addresstypecode>;
    Address1_City: string;
    Address3_Line1: string;
    Address1_Line1: string;
    Address1_Longitude: string;
    ModifiedOn: Date;
    Aging90: XQR.ValueContainerFilter<number>;
    OverriddenCreatedOn: Date;
    DoNotPostalMail: boolean;
    Address1_AddressTypeCode: XQR.ValueContainerFilter<contact_address1_addresstypecode>;
    Address3_Line2: string;
    Aging30: XQR.ValueContainerFilter<number>;
    Address3_Telephone1: string;
    Address3_Line3: string;
    DoNotSendMM: boolean;
    Address2_County: string;
    CreditOnHold: boolean;
    DoNotBulkPostalMail: boolean;
    Aging60_Base: XQR.ValueContainerFilter<number>;
    AccountRoleCode: XQR.ValueContainerFilter<contact_accountrolecode>;
    Address1_ShippingMethodCode: XQR.ValueContainerFilter<contact_address1_shippingmethodcode>;
    CreatedBy: XQR.EntityReferenceFilter;
    GenderCode: XQR.ValueContainerFilter<contact_gendercode>;
    Address3_UTCOffset: number;
    ExternalUserIdentifier: string;
    Address3_PrimaryContactName: string;
    OriginatingLeadId: XQR.EntityReferenceFilter;
    OwningBusinessUnit: XQR.EntityReferenceFilter;
    PreferredAppointmentTimeCode: XQR.ValueContainerFilter<contact_preferredappointmenttimecode>;
    Address2_StateOrProvince: string;
    MobilePhone: string;
    Address2_Country: string;
    Address2_Line2: string;
    Address3_StateOrProvince: string;
    ModifiedOnBehalfBy: XQR.EntityReferenceFilter;
    SLAId: XQR.EntityReferenceFilter;
    AssistantPhone: string;
    ParentContactId: XQR.EntityReferenceFilter;
    StatusCode: XQR.ValueContainerFilter<contact_statuscode>;
    OnHoldTime: number;
    Address3_Longitude: string;
    CreditLimit: XQR.ValueContainerFilter<number>;
    BirthDate: Date;
    Address1_UTCOffset: number;
    ManagerPhone: string;
    EmployeeId: string;
    VersionNumber: number;
    Address3_UPSZone: string;
    Telephone1: string;
    CustomerTypeCode: XQR.ValueContainerFilter<contact_customertypecode>;
    ExchangeRate: string;
    Address3_Composite: string;
    IsPrivate: boolean;
    Telephone3: string;
    CustomerSizeCode: XQR.ValueContainerFilter<contact_customersizecode>;
    PreferredContactMethodCode: XQR.ValueContainerFilter<contact_preferredcontactmethodcode>;
    ChildrensNames: string;
    Address2_Latitude: string;
    CreatedOn: Date;
    DoNotBulkEMail: boolean;
    DoNotFax: boolean;
    AnnualIncome_Base: XQR.ValueContainerFilter<number>;
    Aging90_Base: XQR.ValueContainerFilter<number>;
    Address1_Composite: string;
    FirstName: string;
    CreatedOnBehalfBy: XQR.EntityReferenceFilter;
    Address2_FreightTermsCode: XQR.ValueContainerFilter<contact_address2_freighttermscode>;
    Callback: string;
    dg_TestAccount: XQR.EntityReferenceFilter;
    Address2_PostalCode: string;
    EducationCode: XQR.ValueContainerFilter<contact_educationcode>;
    LastUsedInCampaign: Date;
    UTCConversionTimeZoneCode: number;
    ProcessId: XQR.Guid;
    GovernmentId: string;
    IsAutoCreate: boolean;
    Address2_Line3: string;
    Description: string;
    ModifiedBy: XQR.EntityReferenceFilter;
    TimeZoneRuleVersionNumber: number;
    SpousesName: string;
    Address1_County: string;
    Address3_FreightTermsCode: XQR.ValueContainerFilter<contact_address3_freighttermscode>;
    DoNotEMail: boolean;
    Address3_County: string;
    Pager: string;
    Address2_PostOfficeBox: string;
    Address2_Telephone1: string;
    Address2_Telephone2: string;
    Address2_Telephone3: string;
    Aging60: XQR.ValueContainerFilter<number>;
    Address1_AddressId: XQR.Guid;
    TraversedPath: string;
    Address1_FreightTermsCode: XQR.ValueContainerFilter<contact_address1_freighttermscode>;
    AnnualIncome: XQR.ValueContainerFilter<number>;
    OwningUser: XQR.EntityReferenceFilter;
    WebSiteUrl: string;
    Address2_Name: string;
    MiddleName: string;
    Address3_Telephone2: string;
    EntityImageId: XQR.Guid;
    DoNotPhone: boolean;
    Address3_ShippingMethodCode: XQR.ValueContainerFilter<contact_address3_shippingmethodcode>;
    Address2_Composite: string;
    Address1_Country: string;
    OwningTeam: XQR.EntityReferenceFilter;
    Address1_StateOrProvince: string;
    PaymentTermsCode: XQR.ValueContainerFilter<contact_paymenttermscode>;
    PreferredEquipmentId: XQR.EntityReferenceFilter;
    Address1_Line3: string;
    SLAInvokedId: XQR.EntityReferenceFilter;
    JobTitle: string;
    NickName: string;
    TransactionCurrencyId: XQR.EntityReferenceFilter;
    ManagerName: string;
    Address1_Telephone1: string;
    Address1_Telephone2: string;
    Address1_Telephone3: string;
    IsBackofficeCustomer: boolean;
    ContactId: XQR.Guid;
    Address2_UTCOffset: number;
    Suffix: string;
    Fax: string;
    MasterId: XQR.EntityReferenceFilter;
    AssistantName: string;
    OwnerId: XQR.EntityReferenceFilter;
    Address3_Country: string;
    ParticipatesInWorkflow: boolean;
    CreditLimit_Base: XQR.ValueContainerFilter<number>;
    Address2_Fax: string;
    Merged: boolean;
    Address2_Longitude: string;
    ModifiedByExternalParty: XQR.EntityReferenceFilter;
    DefaultPriceLevelId: XQR.EntityReferenceFilter;
    AccountId: XQR.EntityReferenceFilter;
    Address3_Latitude: string;
    Address1_PrimaryContactName: string;
    StateCode: XQR.ValueContainerFilter<contact_statecode>;
    LastOnHoldTime: Date;
    Address1_Line2: string;
    Company: string;
    ParentCustomerId: XQR.EntityReferenceFilter;
    Address2_AddressTypeCode: XQR.ValueContainerFilter<contact_address2_addresstypecode>;
    Address2_UPSZone: string;
    Address3_Name: string;
    Address3_Fax: string;
    Salutation: string;
    Address1_PostalCode: string;
    CreatedByExternalParty: XQR.EntityReferenceFilter;
    StageId: XQR.Guid;
    Address3_Telephone3: string;
    Address3_PostalCode: string;
    PreferredAppointmentDayCode: XQR.ValueContainerFilter<contact_preferredappointmentdaycode>;
    PreferredServiceId: XQR.EntityReferenceFilter;
    Address2_AddressId: XQR.Guid;
    Home2: string;
    Anniversary: Date;
    ImportSequenceNumber: number;
    Address2_City: string;
    HasChildrenCode: XQR.ValueContainerFilter<contact_haschildrencode>;
    Telephone2: string;
    SubscriptionId: XQR.Guid;
    FamilyStatusCode: XQR.ValueContainerFilter<contact_familystatuscode>;
    Department: string;
    Address3_City: string;
    Business2: string;
    PreferredSystemUserId: XQR.EntityReferenceFilter;
    Aging30_Base: XQR.ValueContainerFilter<number>;
    Address1_Name: string;
    Address1_Fax: string;
    Address1_Latitude: string;
    Address2_ShippingMethodCode: XQR.ValueContainerFilter<contact_address2_shippingmethodcode>;
    EMailAddress3: string;
    Address3_PostOfficeBox: string;
    LeadSourceCode: XQR.ValueContainerFilter<contact_leadsourcecode>;
    Address2_Line1: string;
    Address1_UPSZone: string;
    LastName: string;
    ShippingMethodCode: XQR.ValueContainerFilter<contact_shippingmethodcode>;
    TerritoryCode: XQR.ValueContainerFilter<contact_territorycode>;
    FtpSiteUrl: string;
    NumberOfChildren: number;
    Address1_PostOfficeBox: string;
    Address2_PrimaryContactName: string;
    FullName: string;
    Address3_AddressId: XQR.Guid;
  }
  interface Contact_Expand {
    Contact_Tasks: RestExpand<Contact_Select,Task_Select>;
    Referencedcontact_master_contact: RestExpand<Contact_Select,Contact_Select>;
    account_primary_contact: RestExpand<Contact_Select,Account_Select>;
    Referencedcontact_customer_contacts: RestExpand<Contact_Select,Contact_Select>;
    Referencingcontact_master_contact: RestExpand<Contact_Select,Contact_Select>;
    contact_customer_accounts: RestExpand<Contact_Select,Account_Select>;
    Referencingcontact_customer_contacts: RestExpand<Contact_Select,Contact_Select>;
    dg_account_contact_TestAccount: RestExpand<Contact_Select,Account_Select>;
    dg_account_contact: RestExpand<Contact_Select,Account_Select>;
  }
}
interface RestEntities {
  Contact: RestMapping<RestAPI.Contact,RestAPI.Contact_Select,RestAPI.Contact_Expand,RestAPI.Contact_Filter,RestAPI.ContactResult>;
}
