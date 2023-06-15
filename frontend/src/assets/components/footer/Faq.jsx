import React from "react";

const Faq = () => {
    return (
        <div>
            <section class="dark:bg-gray-800 dark:text-gray-100 my-6 ">
                <div class="container flex flex-col justify-center p-4 mx-auto md:p-8 my-5">
                    <h2 class="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl my-5">
                        Frequently Asked Questions
                    </h2>
                    <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 my-8">
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">
                                Q: How can I make a hotel reservation?
                            </summary>
                            <div class="px-4 pb-4">
                                <p>
                                    A: Making a hotel reservation is quick and easy! Simply visit
                                    our website or call our reservation hotline to check
                                    availability and book your desired room. You can also use our
                                    mobile app for convenient booking on the go.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">
                                Q: What information do I need to provide when making a
                                reservation?
                            </summary>
                            <div class="px-4 pb-4">
                                <p>
                                    A: To complete your hotel reservation, we will need your full
                                    name, contact details (email and phone number), preferred
                                    check-in and check-out dates, as well as the number of guests
                                    (adults and children) staying in the room. Additionally, we
                                    may require a valid credit card to secure your booking.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">
                                Q: Can I modify or cancel my reservation?
                            </summary>
                            <div class="px-4 pb-4 space-y-2">
                                <p>
                                    A: Yes, you can modify or cancel your reservation, subject to
                                    our cancellation policy. Simply contact our customer service
                                    team or visit our website and provide your reservation
                                    details. Please note that modifying or canceling a reservation
                                    may be subject to fees or penalties, depending on the terms
                                    and conditions of your booking.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">
                                Q: What payment methods are accepted for hotel reservations?
                            </summary>
                            <div class="px-4 pb-4 space-y-2">
                                <p>
                                    A: We accept various payment methods, including major credit
                                    cards (Visa, Mastercard, American Express) and online payment
                                    platforms. Some hotels may also accept cash upon arrival, but
                                    we recommend checking the specific hotel's payment options
                                    before making your reservation.
                                </p>
                            </div>
                        </details>
                        <details>
                            <summary class="py-2 outline-none cursor-pointer focus:underline">
                                Q: Are there any additional fees or taxes added to the room
                                rate?
                            </summary>
                            <div class="px-4 pb-4 space-y-2">
                                <p>
                                    A: In addition to the room rate, there may be additional fees
                                    or taxes applied, such as service charges, resort fees, or
                                    local taxes. These charges will be clearly stated during the
                                    booking process, so you can review them before confirming your
                                    reservation.
                                </p>
                            </div>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
