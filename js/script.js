var app = new Vue(
  {
    el: '#root',
    data: {
        response: [
            {
                article:{
                    id:null,
                    name:"Fiat Ducato",
                    description:"",
                    external_code:"e8729f3e-3fe9-43e2-a416-0b9dff5db8d4",
                    acris:"PVMR",
                    subcategory_id:2,
                    features:[
                        {
                            name:"feature.aircon",
                            value:"common.feature.values.true",
                            class:"glyphicons snowflake"
                        },
                        {
                            name:"feature.transmission",
                            value:"common.feature.values.gear.manual",
                            class:"tino_font icon-gear"
                        },
                        {
                            name:"feature.doors",
                            value:"4",
                            class:"tino_font icon-door"
                        },
                        {
                            name:"feature.seats",
                            value:"9",
                            class:"tino_font icon-seat"
                        }
                    ],
                    images:[
                        "https:\/\/cdn-partner.tinoleggio.it\/vehicles\/158\/a2344e38c622f9f4b704480cd5905711.jpeg"
                    ]
                },
                
                partner:{
                    id:158,
                    name:"Rental4Leisure",
                    logo:null,
                    namespace:null
                },
                
                res_partner:{
                    id:"1ffb68ec",
                    name:"Rental4Leisure",
                    logo:"https:\/\/cdn-partner.tinoleggio.it\/partners\/rental4leisure.png",
                    rate:
                        {
                            avg:0,
                            n:0
                        }
                },
                
                pick_up_center:{
                    location_id:"a6867eb2-0c8c-4e7d-8f9a-b78bdd2e858e",
                    address:"Via delle Sarte snc, Alghero",
                    at_airport:false,
                    at_station:false,
                    email:null,
                    lat:40.590471,
                    long:8.325324,
                    phone:"0039 (0)79 953047",
                    note:"a:4:{s:14:\"alternate_name\";s:2:\"33\";s:8:\"terminal\";N;s:12:\"instructions\";s:87:\"All'uscita dal Terminal, per organizzareil ritiro, chiamare il numero (+39)079953047.\";s:13:\"location_type\";s:14:\"FREESHUTTLEBUS\";}",
                    city_id:"142052"
                },
                
                drop_off_center:{
                    location_id:"a6867eb2-0c8c-4e7d-8f9a-b78bdd2e858e",
                    address:"Via delle Sarte snc, Alghero",
                    at_airport:false,
                    at_station:false,
                    email:null,
                    lat:40.590471,
                    long:8.325324,
                    phone:"0039 (0)79 953047",
                    note:"a:4:{s:14:\"alternate_name\";s:2:\"33\";s:8:\"terminal\";N;s:12:\"instructions\";s:87:\"All'uscita dal Terminal, per organizzare il ritiro, chiamare il numero (+39) 079953047.\";s:13:\"location_type\";s:14:\"FREESHUTTLEBUS\";}",
                    city_id:"142052"
                },
                extras:[],
                services:[],
                prices:[
                    {
                        price:380.65,
                        base_price:380.65,
                        pre_discount_price:390.58,
                        base_pre_discount_price:390.58,
                        advance:49.65,
                        base_advance:49.65,
                        commission:49.65,
                        code:"add7ad47750f9dc9eef66dc6624e21fe",
                        km_included:9999,
                        km_extra_price:0,
                        rental_day:1,
                        upgrade_price:false,
                        included:
                            {
                                extra:[],
                                services:[],
                                insurance:[]
                            },
                        currency:"EUR",
                        base_currency:"EUR",
                        base_advance_currency:"EUR",
                        base_pre_discount_currency:"EUR",
                        deposit_price:2000,
                        deposit_currency:"EUR",
                        pre_deposit_currency:"EUR",
                        description:"",
                        search_param:
                            {
                                search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",
                                vehicle_id:"17ad5f56d76e920671663848e5a983e5",rate_id:"add7ad47750f9dc9eef66dc6624e21fe"
                            }
                        }
                ],
                
                driver_info:{
                    age:30,
                    country:"IT"
                },
                
                extra_info:{
                    on_request:true,
                    delivered:false,
                    fuel_policy:1,
                    insurance_type:"internal",
                    payment_class:"rooster",
                    credit_card:true,
                    external_insurance:true,
                    search_param:
                        {
                            search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",vehicle_id:"17ad5f56d76e920671663848e5a983e5",rate_id:"add7ad47750f9dc9eef66dc6624e21fe"
                        },
                    partner:
                        {
                            id:158,
                            name:"Rental4Leisure",
                            code:null
                        },
                    location_type:"FREESHUTTLEBUS",
                    rental_informations:[],
                    cancellation_policies:[],
                    payment_info:[],
                    rate_qualifier:"partpaid",
                    partner_payment:false,
                    category_group:"minivan9",
                    model_guaranteed:false,
                    cards_accepted:[
                            {
                                card:"CREDITCARD",
                                card_code:"VISA",
                                issuer:null
                            },
                            {
                                card:"CREDITCARD",
                                card_code:"MASTERCARD",
                                issuer:null
                            }
                    ],
                    opening_hours:[]
                },
                insurance:[],
                rental_terms:[],
                highlight:"6e2908c7bb5356a4a0491e0fe1c4fef9",
                included_highlight:[]
            },
            {
                article:{
                    id:null,
                    name:"Toyota Aygo",
                    description:"",
                    external_code:"1be25d25",
                    acris:"MCMR",
                    subcategory_id:1,
                    features:[
                        {
                            name:"feature.aircon",
                            value:"common.feature.values.true",
                            class:"glyphicons snowflake"
                        },
                        {
                            name:"feature.transmission",
                            value:"common.feature.values.gear.manual",
                            class:"tino_font icon-gear"
                        },
                        {
                            name:"feature.doors",
                            value:"5",
                            class:"tino_font icon-door"
                        },
                        {
                            name:"feature.seats",
                            value:"4",
                            class:"tino_font icon-seat"
                        },
                        {
                            name:"feature.fuel",
                            value:"petrol",
                            class:"tino_font icon-gasoline"
                        }
                    ],
                    images:[
                        "https:\/\/cdn-partner.tinoleggio.it\/vehicles\/40\/62654602b1f940070a3fea2c8bd9673d.jpg"
                    ]
                },
                
                partner:{
                    id:"40",
                    name:"Noleggiare",
                    logo:null,
                    namespace:null
                },
                
                res_partner:{
                    id:53,
                    name:"Noleggiare",
                    logo:"https:\/\/cdn-partner.tinoleggio.it\/partners\/noleggiare.png",
                    rate:
                        {
                            avg:8,
                            n:353
                        }
                },
                
                pick_up_center:{
                    location_id:"8b620f512f",
                    address:"Via Provinciale (di fronte all\u2019Aeroporto) snc",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.6308296,
                    long:8.2954665,
                    phone:"(+39) 391\/1252668",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";s:243:\"L'ufficio di noleggio si trova all'esterno del Terminal a circa 250m all'interno della \u201cS.R Gestione Parcheggi Parking\u201d. \/\/ Office is located outside the Terminal, about 250m (3 min. by walk) inside of \u201cS.R Gestione Parcheggi Parking\u201d.\";s:13:\"location_type\";s:16:\"RENTALCENTERAREA\";}",
                    city_id:"142052"
                },
                
                drop_off_center:{
                    location_id:"8b620f512f",
                    address:"Via Provinciale (di fronte all\u2019Aeroporto) snc",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.6308296,
                    long:8.2954665,
                    phone:"(+39) 391\/1252668",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";s:243:\"L'ufficio di noleggio si trova all'esterno del Terminal a circa 250m all'interno della \u201cS.R Gestione Parcheggi Parking\u201d. \/\/ Office is located outside the Terminal, about 250m (3 min. by walk) inside of \u201cS.R Gestione Parcheggi Parking\u201d.\";s:13:\"location_type\";s:16:\"RENTALCENTERAREA\";}",
                    city_id:"142052"
                },
                extras:[],
                services:[],
                prices:[
                    {
                        price:115.63,
                        base_price:115.63,
                        pre_discount_price:118.6,
                        base_pre_discount_price:118.6,
                        advance:115.63,
                        base_advance:115.63,
                        commission:16.8,
                        code:"d2eca0610a4ffd52b96fc6adb8c009a5",
                        km_included:9999,
                        km_extra_price:0,
                        rental_day:1,
                        upgrade_price:false,
                        included:
                            {
                                extra:[],
                                services:[],
                                insurance:[]
                            },
                        currency:"EUR",
                        base_currency:"EUR",
                        base_advance_currency:"EUR",
                        base_pre_discount_currency:"EUR",
                        deposit_price:600,
                        deposit_currency:"EUR",
                        pre_deposit_currency:"EUR",
                        description:"",
                        search_param:
                            {
                                search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",
                                vehicle_id:"d462122ff9a5940fc670b35df9ed821c",rate_id:"d2eca0610a4ffd52b96fc6adb8c009a5"
                            }
                    }
                ],
                
                driver_info:{
                    age:30,
                    country:"IT"
                },
                
                extra_info:{
                    on_request:false,
                    delivered:false,
                    fuel_policy:1,
                    insurance_type:"internal",
                    payment_class:"rooster",
                    credit_card:true,
                    external_insurance:true,
                    search_param:
                        {
                            search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",vehicle_id:"d462122ff9a5940fc670b35df9ed821c",rate_id:"d2eca0610a4ffd52b96fc6adb8c009a5"
                        },
                        partner:{
                            id:"40",
                            name:"Noleggiare",
                            code:null
                        },
                    location_type:"RENTALCENTERAREA",
                    rental_informations:[],
                    cancellation_policies:[],
                    payment_info:[],
                    rate_qualifier:"prepaid",
                    partner_payment:false,
                    category_group:"mini",
                    model_guaranteed:false,
                    cards_accepted:[
                            {
                                card:"CREDITCARD",
                                card_code:"VISA",
                                issuer:null
                            },
                            {
                                card:"CREDITCARD",
                                card_code:"MASTERCARD",
                                issuer:null
                            },
                            {
                                card:"CREDITCARD",
                                card_code:"AMERICAN_EXPRESS",
                                issuer:null
                            },
                            {
                                card:"CREDITCARD",
                                card_code:"DINERS_CLUB",
                                issuer:null
                            }
                    ],
                    opening_hours:[]
                },
                insurance:[],
                rental_terms:[],
                highlight:"f861f506d61306a82b3a399b5a5a9112",
                included_highlight:[]
            },
            {
                article:{
                    id:null,
                    name:"Citroen C4 Cactus",
                    description:"",
                    external_code:"3b5b4341-5069-4b0c-949e-b2fe516c8433",
                    acris:"CDMR",
                    subcategory_id:1,
                    features:[
                        {
                            name:"feature.aircon",
                            value:"common.feature.values.true",
                            class:"glyphicons snowflake"
                        },
                        {
                            name:"feature.transmission",
                            value:"common.feature.values.gear.manual",
                            class:"tino_font icon-gear"
                        },
                        {
                            name:"feature.doors",
                            value:"5",
                            class:"tino_font icon-door"
                        },
                        {
                            name:"feature.seats",
                            value:"5",
                            class:"tino_font icon-seat"
                        },
                        {
                            name:"feature.fuel",
                            value:"petrol",
                            class:"tino_font icon-gasoline"
                        }
                    ],
                    images:[
                        "https:\/\/cdn-partner.tinoleggio.it\/vehicles\/153\/46e501467b81a9e9eb43691b70024fff.png"
                    ]
                },
                
                partner:{
                    id:"153",
                    name:"Autovia",
                    logo:null,
                    namespace:null
                },
                
                res_partner:{
                    id:523,
                    name:"Autovia",
                    logo:"https:\/\/cdn-partner.tinoleggio.it\/partners\/autovia.png",
                    rate:{
                        avg:8,
                        n:55
                    }
                },
                
                pick_up_center:{
                    location_id:"da398bfe0d",
                    address:"Regione Nuraghe Biancu SNC",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.630826,
                    long:8.29577,
                    phone:"0039 392 6805930",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";N;s:13:\"location_type\";s:10:\"INTERMINAL\";}",city_id:"142052"
                },
                
                drop_off_center:{
                    location_id:"da398bfe0d",
                    address:"Regione Nuraghe Biancu SNC",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.630826,
                    long:8.29577,
                    phone:"0039 392 6805930",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";N;s:13:\"location_type\";s:10:\"INTERMINAL\";}",city_id:"142052"
                },
                extras:[],
                services:[],
                prices:[
                    {
                        price:476.87,
                        base_price:476.87,
                        pre_discount_price:489.31,
                        base_pre_discount_price:489.31,
                        advance:62.2,
                        base_advance:62.2,
                        commission:62.2,
                        code:"8be8ba6d2a721ccf4aeeac4f2417c12d",
                        km_included:9999,
                        km_extra_price:0,
                        rental_day:1,
                        upgrade_price:false,
                        included:
                            {
                                extra:[],
                                services:[],
                                insurance:[]
                            },
                        currency:"EUR",
                        base_currency:"EUR",
                        base_advance_currency:"EUR",
                        base_pre_discount_currency:"EUR",
                        deposit_price:600,
                        deposit_currency:"EUR",
                        pre_deposit_currency:"EUR",
                        description:"",
                        search_param:
                            {
                                search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",
                                vehicle_id:"36c91a659300d5474ec003d9a08c2492",rate_id:"8be8ba6d2a721ccf4aeeac4f2417c12d"
                            }
                    }
                ],
                driver_info:{
                    age:30,
                    country:"IT"
                },

                extra_info:{
                    on_request:false,
                    delivered:false,
                    fuel_policy:1,
                    insurance_type:"internal",
                    payment_class:"rooster",
                    credit_card:false,
                    external_insurance:true,
                    search_param:
                        {
                            search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",vehicle_id:"36c91a659300d5474ec003d9a08c2492",rate_id:"8be8ba6d2a721ccf4aeeac4f2417c12d"
                        },
                    partner:
                        {
                            id:"153",
                            name:"Autovia",
                            code:null
                        },
                    location_type:"INTERMINAL",
                    rental_informations:[],
                    cancellation_policies:[
                            {
                                amount:0,
                                currency:"EUR",
                                start_date:null,
                                end_date:"2021-07-19T10:00:00+02:00",
                                penalty_description:[]
                            },
                            {
                                amount:0,
                                currency:"EUR",
                                start_date:"2021-07-19T10:00:00+02:00",
                                end_date:null,
                                penalty_description:[]
                            }
                    ],
                    payment_info:[],
                    rate_qualifier:"partpaid",
                    partner_payment:false,
                    category_group:"compact",
                    model_guaranteed:false,
                    cards_accepted:[
                        {
                            card:"CREDITCARD",
                            card_code:"VISA",
                            issuer:null
                        },
                        {
                            card:"CREDITCARD",
                            card_code:"MASTERCARD",
                            issuer:null
                        },
                        {
                            card:"CREDITCARD",
                            card_code:"AMERICAN_EXPRESS",
                            issuer:null
                        },
                        {
                            card:"DEBITCARD",
                            card_code:"VISA",
                            issuer:null
                        },
                        {
                            card:"DEBITCARD",
                            card_code:"MASTERCARD",
                            issuer:null
                        },
                        {
                            card:"PREPAID",
                            card_code:"VISA",
                            issuer:null
                        },
                        {
                            card:"PREPAID",
                            card_code:"MASTERCARD",
                            issuer:null
                        },
                        {
                            card:"CASH",
                            card_code:null,
                            issuer:null
                        }
                    ],
                    opening_hours:[]
                },
                insurance:[],
                rental_terms:[],
                highlight:"d67a6d824f3e000e07738d5cd755654c",
                included_highlight:[
                    {
                        name:"snippet_article.included_extra.with_excess",
                        class:"glyphicons glyphicons-shield",
                        purpose:"withexcess",
                        type:"Partner\\entity\\Fee"
                    },
                    {
                        name:"snippet_article.included_extra.additional_driver",
                        class:"glyphicons glyphicons-user-add",
                        purpose:"freeadditionaldriver",
                        type:"Partner\\entity\\Fee"
                    },
                    {
                        name:"snippet_article.included_extra.young_driver",
                        class:"glyphicons glyphicons-baby-formula",
                        purpose:"youngdriver",
                        type:"Partner\\entity\\Fee"
                    }
                ]
            },
            {
                article:{
                    id:null,
                    name:"Opel Combo",
                    description:"",
                    external_code:"7114abbd",
                    acris:"IVMR",
                    subcategory_id:3,
                    features:[
                        {
                            name:"feature.aircon",
                            value:"common.feature.values.true",
                            class:"glyphicons snowflake"
                        },
                        {
                            name:"feature.transmission",
                            value:"common.feature.values.gear.manual",
                            class:"tino_font icon-gear"
                        },
                        {
                            name:"feature.doors",
                            value:"5",
                            class:"tino_font icon-door"
                        },
                        {
                            name:"feature.seats",
                            value:"7",
                            class:"tino_font icon-seat"
                        },
                        {
                            name:"feature.fuel",
                            value:"diesel",
                            class:"tino_font icon-gasoline"
                        }
                    ],
                    images:[
                        "https:\/\/cdn-partner.tinoleggio.it\/vehicles\/57\/4e2167b19e9b414fb32d947d9ca8b792.png"
                    ]
                },
                
                partner:{
                    id:"57",
                    name:"Ecovia",
                    logo:null,
                    namespace:null
                },
                
                res_partner:{
                    id:368,
                    name:"Ecovia",
                    logo:"https:\/\/cdn-partner.tinoleggio.it\/partners\/ecovia.png",
                    rate:
                        {
                            avg:7,
                            n:231
                        }
                },
                pick_up_center:{
                    location_id:"642ca0c8e6",
                    address:"Regione Nuraghe Biancu SNC",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.630826,
                    long:8.29577,
                    phone:"0039 392 6805930",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";N;s:13:\"location_type\";s:10:\"INTERMINAL\";}",city_id:"142052"
                },
                
                drop_off_center:{
                    location_id:"642ca0c8e6",
                    address:"Regione Nuraghe Biancu SNC",
                    at_airport:true,
                    at_station:false,
                    email:null,
                    lat:40.630826,
                    long:8.29577,
                    phone:"0039 392 6805930",
                    note:"a:4:{s:14:\"alternate_name\";s:3:\"AHO\";s:8:\"terminal\";N;s:12:\"instructions\";N;s:13:\"location_type\";s:10:\"INTERMINAL\";}",city_id:"142052"
                },
                extras:[],
                services:[],
                prices:[
                    {
                        price:2283.59,
                        base_price:2283.59,
                        pre_discount_price:2342.14,
                        base_pre_discount_price:2342.14,
                        advance:2283.59,
                        base_advance:2283.59,
                        commission:331.81,
                        code:"7c6b84785d55865b09f2b69e7ca47f0b",
                        km_included:9999,
                        km_extra_price:0,
                        rental_day:1,
                        upgrade_price:false,
                        included:
                            {
                                extra:[],
                                services:[],
                                insurance:[]
                            },
                        currency:"EUR",
                        base_currency:"EUR",
                        base_advance_currency:"EUR",
                        base_pre_discount_currency:"EUR",
                        deposit_price:700,
                        deposit_currency:"EUR",
                        pre_deposit_currency:"EUR",
                        description:"",
                        search_param:
                            {
                                search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",
                                vehicle_id:"9bfd254766fccaedfcab30dca54aedf6",rate_id:"7c6b84785d55865b09f2b69e7ca47f0b"
                            }
                    }
                ],
                
                driver_info:{
                    age:30,
                    country:"IT"
                },
                
                extra_info:{
                    on_request:true,
                    delivered:false,
                    fuel_policy:1,
                    insurance_type:"internal",
                    payment_class:"rooster",
                    credit_card:true,
                    external_insurance:true,
                    search_param:
                        {
                            search_id:"f4b1cf983263ef0acb2ebd459119d0f560cb4c08e44982.20424569",vehicle_id:"9bfd254766fccaedfcab30dca54aedf6",rate_id:"7c6b84785d55865b09f2b69e7ca47f0b"
                        },
                    partner:
                        {
                            id:"57",
                            name:"Ecovia",
                            code:null
                        },
                    location_type:"INTERMINAL",
                    rental_informations:[],
                    cancellation_policies:[],
                    payment_info:[],
                    rate_qualifier:"prepaid",
                    partner_payment:false,
                    category_group:"minivan7",
                    model_guaranteed:false,
                    cards_accepted:[
                        {
                            card:"CREDITCARD",
                            card_code:"VISA",
                            issuer:null
                        },
                        {
                            card:"CREDITCARD",
                            card_code:"MASTERCARD",
                            issuer:null
                        },
                        {
                            card:"CREDITCARD",
                            card_code:"AMERICAN_EXPRESS",
                            issuer:null
                        }
                    ],
                    opening_hours:[]
                },
                insurance:[],
                rental_terms:[],
                highlight:"23fec3d82461c6ee215b00c56b38304d",
                included_highlight:[
                    {
                        name:"snippet_article.included_extra.additional_driver",
                        class:"glyphicons glyphicons-user-add",
                        purpose:"freeadditionaldriver",
                        type:"Partner\\entity\\Fee"
                    }
                ]
            },
        ],     
    },
    methods: {

      
    },
    computed: {
      translationFuel: function() {
        this.fuel = '';
        if(this.response[0].extra_info.fuel_policy == 1) {
          this.fuel = "pieno";
        } if (this.response[0].extra_info.fuel_policy == 2) {
          this.fuel = "prepagato";
        } if (this.response[0].extra_info.fuel_policy == 3) {
          this.fuel = "prepagato (rimborsabile)";
        } if (this.response[0].extra_info.fuel_policy == 4) {
          this.fuel = "pieno omaggio";
        } if (this.response[0].extra_info.fuel_policy == 5) {
          this.fuel = "non definito";
        } 
        return this.fuel;
      }, 
    },
  }
);