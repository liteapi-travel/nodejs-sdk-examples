
const liteApi = require('liteapi-travel')("YOUR_API_KEY");


async function getCities() {
    const countryCode = "IT";
    const result = await liteApi.getCitiesByCountryCode(countryCode);
    return result
}


async function getCountries() {
    const result = await liteApi.getCountries();
    return result
}


async function getCurrencies() {
    const result = await liteApi.getCurrencies();
    return result
}


async function getHotels() {
    const countryCode = "IT";
    const cityName = "Rome";
    //Optional values
    const offset = 1000;
    const limit = 1000;
    const longitude = "-115.16988";
    const latitude = "36.12510";
    const distance = 1000;
    const result = await liteApi.getHotels(countryCode, cityName);
    return result
}

async function getHotelsWithOptionalValues() {
    const countryCode = "IT";
    const cityName = "Rome";
    //Optional values
    const offset = 1000;
    const limit = 1000;
    const longitude = "-115.16988";
    const latitude = "36.12510";
    const distance = 1000;

    const result = await liteApi.getHotels(countryCode, cityName, offset, limit, longitude, latitude, distance)

    return result
}


async function getHotelDetails() {
    const hotelID = "lp24373";
    const result = await liteApi.getHotelDetails(hotelID);
    return result
}


async function getMinimumRates() {
    const checkin = "2023-11-15";
    const checkout = "2023-11-16";
    const currency = "USD";
    const guestNationality = "US";
    const hotelIdsList = ["lp3803c", "lp1f982", "lp19b70", "lp19e75"];
    const adults = 1;
    //Optional values
    const childrenAges = [2, 3];
    const travelerID = "traveler1";

    const result = await liteApi.getMinimumRates(checkin, checkout, currency, guestNationality, hotelIdsList, adults);
    return result
}

async function getFullRates() {
    const checkin = "2023-11-15";
    const checkout = "2023-11-16";
    const currency = "USD";
    const guestNationality = "US";
    const hotelIdsList = ["lp3803", "lp1f982", "lp19b70", "lp19e75"];
    const adults = 2;
    //Optional values
    const childrenAges = [2, 3];
    const travelerID = "traveler1";

    const result = await liteApi.getFullRates(checkin, checkout, currency, guestNationality, hotelIdsList, adults);
    return result
}


async function preBook() {
    const rateId = "NRYDCZRZHAZHYMRQGIZS2MJRFUYTK7BSGAZDGLJRGEWTCNT4GJ6HYVKTPRDVSWSEJVMVUV2HIUZUOS2OKJKEOWKZKRCU2QSXJVETGRCTJZKEMR2ZGNMFSTKKIRDUSWKEIVGVUUSHIVMVISZXIJJUOQK2IRDU2SSSI5CTGSCZLJGE6TBVJNLEON2DKZFU4NSGJNKTERKQKFNEKQ2NINCFAUK2IRCU6QSUKBJEWVCFKZJVST2KGZCEGTSSLJDUCMSEJVHEUUSIIVMUIS2NJJJESNKMIZBVSUSEI5CVURCTJZBFER2BKJKEKT2CKNDFKWKUIVHUUVKHIVMUQWKUKNJUSWSIJBMU2USRI5EVSRCBJVJFERZVGZCEGN2CK5DUSWSEKNETEU2KGRJFKNCVKNDUUWKSKRCU2QSTI5AVOVCBJVJE4R2FGNIXYVKTIR6HY7BXGEXDMM34GIYDEMBNGAZC2MJXPRBE67BRGI4TIMJQPQZA";
    const result = await liteApi.preBook(rateId)
    return result
}

async function book() {
    const prebookId = "P934os8DH";
    const guestInfo = { guestFirstName: 'Kim', guestLastName: 'James', guestEmail: 'test@nlite.ml' };
    const paymentMethod = "CREDIT_CARD";
    const holderName = "Kim James";
    const paymentInfo = { "card_number": "4242424242424242", "exp_month": 11, "exp_year": 23, "cvc": 123, "token": null }

    const result = await liteApi.book(prebookId, guestInfo, paymentMethod, holderName, paymentInfo)
    return result
}

async function getBookingListByGuestId() {
    const guestId = "FrT56hfty";
    const result = await liteApi.getBookingListByGuestId(guestId)
    return result
}

async function retrievedBooking() {
    const bookingId = "CqKXCubJq";
    const result = await liteApi.retrievedBooking(bookingId);
    return result
}

async function cancelBooking() {
    const bookingId = "CqKXCubJq";
    const result = await liteApi.cancelBooking(bookingId);
    return result
}

async function getGuestsIds() {
    const email = "johndoe@nlite.ml"; //Optional
    const result = await liteApi.getGuestsIds(email);
    return result
}

module.exports = {
    getCities,
    getCities,
    getCountries,
    getCurrencies,
    getHotels,
    getHotelsWithOptionalValues,
    getHotelDetails,
    getMinimumRates,
    getFullRates,
    preBook,
    book,
    getBookingListByGuestId,
    retrievedBooking,
    cancelBooking,
    getGuestsIds
};