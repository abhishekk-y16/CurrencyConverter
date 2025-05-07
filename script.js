// Full currency names with their codes
const currencyNames = {
    "AED": "United Arab Emirates Dirham", "AFN": "Afghan Afghani", "ALL": "Albanian Lek", "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder", "AOA": "Angolan Kwanza", "ARS": "Argentine Peso", "AUD": "Australian Dollar",
    "AWG": "Aruban Florin", "AZN": "Azerbaijani Manat", "BAM": "Bosnia and Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar", "BDT": "Bangladeshi Taka", "BGN": "Bulgarian Lev", "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc", "BMD": "Bermudian Dollar", "BND": "Brunei Dollar", "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real", "BSD": "Bahamian Dollar", "BTN": "Bhutanese Ngultrum", "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble", "BZD": "Belize Dollar", "CAD": "Canadian Dollar", "CDF": "Congolese Franc",
    "CHF": "Swiss Franc", "CLP": "Chilean Peso", "CNY": "Chinese Yuan", "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón", "CUP": "Cuban Peso", "CVE": "Cape Verdean Escudo", "CZK": "Czech Koruna",
    "DJF": "Djiboutian Franc", "DKK": "Danish Krone", "DOP": "Dominican Peso", "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound", "ERN": "Eritrean Nakfa", "ETB": "Ethiopian Birr", "EUR": "Euro", "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound", "GBP": "British Pound Sterling", "GEL": "Georgian Lari", "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound", "GMD": "Gambian Dalasi", "GNF": "Guinean Franc", "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanese Dollar", "HKD": "Hong Kong Dollar", "HNL": "Honduran Lempira", "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde", "HUF": "Hungarian Forint", "IDR": "Indonesian Rupiah", "ILS": "Israeli New Shekel",
    "INR": "Indian Rupee", "IQD": "Iraqi Dinar", "IRR": "Iranian Rial", "ISK": "Icelandic Króna", "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar", "JPY": "Japanese Yen", "KES": "Kenyan Shilling", "KGS": "Kyrgyzstani Som",
    "KHR": "Cambodian Riel", "KMF": "Comorian Franc", "KRW": "South Korean Won", "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar", "KZT": "Kazakhstani Tenge", "LAK": "Lao Kip", "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee", "LRD": "Liberian Dollar", "LSL": "Lesotho Loti", "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham", "MDL": "Moldovan Leu", "MGA": "Malagasy Ariary", "MKD": "Macedonian Denar",
    "MMK": "Burmese Kyat", "MNT": "Mongolian Tögrög", "MOP": "Macanese Pataca", "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee", "MVR": "Maldivian Rufiyaa", "MWK": "Malawian Kwacha", "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit", "MZN": "Mozambican Metical", "NAD": "Namibian Dollar", "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba", "NOK": "Norwegian Krone", "NPR": "Nepalese Rupee", "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial", "PAB": "Panamanian Balboa", "PEN": "Peruvian Sol", "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso", "PKR": "Pakistani Rupee", "PLN": "Polish Złoty", "PYG": "Paraguayan Guaraní",
    "QAR": "Qatari Riyal", "RON": "Romanian Leu", "RSD": "Serbian Dinar", "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc", "SAR": "Saudi Riyal", "SBD": "Solomon Islands Dollar", "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound", "SEK": "Swedish Krona", "SGD": "Singapore Dollar", "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone", "SOS": "Somali Shilling", "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound", "STN": "São Tomé and Príncipe Dobra", "SYP": "Syrian Pound",
    "SZL": "Swazi Lilangeni", "THB": "Thai Baht", "TJS": "Tajikistani Somoni", "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar", "TOP": "Tongan Paʻanga", "TRY": "Turkish Lira", "TTD": "Trinidad and Tobago Dollar",
    "TVD": "Tuvaluan Dollar", "TWD": "New Taiwan Dollar", "TZS": "Tanzanian Shilling", "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling", "USD": "United States Dollar", "UYU": "Uruguayan Peso", "UZS": "Uzbekistani Soʻm",
    "VES": "Venezuelan Bolívar", "VND": "Vietnamese Đồng", "VUV": "Vanuatu Vatu", "WST": "Samoan Tālā",
    "XAF": "Central African CFA Franc", "XCD": "East Caribbean Dollar", "XOF": "West African CFA Franc",
    "XPF": "CFP Franc", "YER": "Yemeni Rial", "ZAR": "South African Rand", "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};

// API key
const apiKey = "69298ebadaf4c8fd5a160e90";

// Populate dropdowns
function populateDropdowns() {
    const fromSelect = document.getElementById("from-currency");
    const toSelect = document.getElementById("to-currency");

    for (const code in currencyNames) {
        const optionFrom = document.createElement("option");
        optionFrom.value = code;
        optionFrom.text = `${code} - ${currencyNames[code]}`;
        fromSelect.appendChild(optionFrom);

        const optionTo = document.createElement("option");
        optionTo.value = code;
        optionTo.text = `${code} - ${currencyNames[code]}`;
        toSelect.appendChild(optionTo);
    }

    // Set default values
    fromSelect.value = "USD";
    toSelect.value = "INR";
}

populateDropdowns();

// Currency conversion
async function convertCurrency() {
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;
    const amount = document.getElementById("amount").value;
    const result = document.getElementById("result");

    if (amount === "") {
        result.innerHTML = "Please enter an amount to convert.";
        return;
    }

    const url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const exchangeRate = data.rates[toCurrency];
        const convertedAmount = (amount * exchangeRate).toFixed(2);

        // Display the full conversion result
        result.innerHTML = `<span>${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}</span>`;
    } catch (error) {
        result.innerHTML = "Error fetching the conversion data.";
    }
}

// Event listeners
document.getElementById("amount").addEventListener("input", convertCurrency);
document.getElementById("from-currency").addEventListener("change", convertCurrency);
document.getElementById("to-currency").addEventListener("change", convertCurrency);

// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const themeButton = document.getElementById("theme-toggle");

    // Change button text based on theme
    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "🌕 Light Mode";
    } else {
        themeButton.textContent = "🌑 Dark Mode";
    }
});
document.getElementById('swapBtn').addEventListener('click', function () {
    const from = document.getElementById('from-currency');
    const to = document.getElementById('to-currency');
    const temp = from.value;

    // Swap the currency values
    from.value = to.value;
    to.value = temp;

    // Trigger currency conversion after swap
    convertCurrency();
});
document.getElementById("rate-date").textContent = `Last updated: ${new Date().toLocaleString()}`;
const result = document.getElementById('result');
result.classList.add('show');



  
