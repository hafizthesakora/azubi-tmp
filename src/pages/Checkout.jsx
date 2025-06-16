import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import OrderConfirmationModal from '../components/OrderConfirmationModal';

// Dynamically import all assets
const images = import.meta.glob('../assets/**/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});

function resolveImage(path) {
  if (typeof path !== 'string') return null;
  const normalized = path.replace('./assets', '../assets');
  return images[normalized];
}

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    paymentMethod: 'e-money',
    eMoneyNumber: '',
    eMoneyPin: '',
  });
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);

  const productsTotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 50;
  const vat = Math.round(productsTotal * 0.2);
  const total = productsTotal + shipping + vat;

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.match(/\S+@\S+\.\S+/)) errs.email = 'Valid email required';
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    if (!form.address.trim()) errs.address = 'Address is required';
    if (!form.zipCode.trim()) errs.zipCode = 'ZIP code is required';
    if (!form.city.trim()) errs.city = 'City is required';
    if (!form.country.trim()) errs.country = 'Country is required';

    if (form.paymentMethod === 'e-money') {
      if (!form.eMoneyNumber.trim())
        errs.eMoneyNumber = 'e-Money number is required';
      if (!form.eMoneyPin.trim()) errs.eMoneyPin = 'e-Money PIN is required';
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    setOrder({ items: cart, total, customerInfo: form });
    clearCart();
  };

  const handleInputChange = (field, value) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: '' });
    }
  };

  if (cart.length === 0 && !order) {
    return (
      <div className="min-h-screen bg-[#FAFAFA] pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-black mb-8">
              Your cart is empty
            </h1>
            <button
              onClick={() => navigate('/')}
              className="inline-block bg-[#D87D4A] text-white px-8 py-3 text-sm font-bold uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Go Back Link */}
        <button
          onClick={() => navigate(-1)}
          className="text-black/50 hover:text-black text-sm mb-8 transition-colors duration-200"
        >
          Go Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-black uppercase tracking-wide mb-8">
                Checkout
              </h1>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Billing Details */}
                <div>
                  <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wide mb-4">
                    Billing Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                          errors.name ? 'border-red-500' : 'border-[#CFCFCF]'
                        }`}
                        placeholder="Alexei Ward"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                          errors.email ? 'border-red-500' : 'border-[#CFCFCF]'
                        }`}
                        placeholder="alexei@mail.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-[#CFCFCF]'
                        }`}
                        placeholder="+1 202-555-0136"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wide mb-4">
                    Shipping Info
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Address
                      </label>
                      <input
                        type="text"
                        value={form.address}
                        onChange={(e) =>
                          handleInputChange('address', e.target.value)
                        }
                        className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                          errors.address ? 'border-red-500' : 'border-[#CFCFCF]'
                        }`}
                        placeholder="1137 Williams Avenue"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.address}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                          ZIP Code
                        </label>
                        <input
                          type="text"
                          value={form.zipCode}
                          onChange={(e) =>
                            handleInputChange('zipCode', e.target.value)
                          }
                          className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                            errors.zipCode
                              ? 'border-red-500'
                              : 'border-[#CFCFCF]'
                          }`}
                          placeholder="10001"
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.zipCode}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                          City
                        </label>
                        <input
                          type="text"
                          value={form.city}
                          onChange={(e) =>
                            handleInputChange('city', e.target.value)
                          }
                          className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                            errors.city ? 'border-red-500' : 'border-[#CFCFCF]'
                          }`}
                          placeholder="New York"
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        value={form.country}
                        onChange={(e) =>
                          handleInputChange('country', e.target.value)
                        }
                        className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                          errors.country ? 'border-red-500' : 'border-[#CFCFCF]'
                        }`}
                        placeholder="United States"
                      />
                      {errors.country && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.country}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h2 className="text-sm font-bold text-[#D87D4A] uppercase tracking-wide mb-4">
                    Payment Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                        Payment Method
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="e-money"
                            checked={form.paymentMethod === 'e-money'}
                            onChange={(e) =>
                              handleInputChange('paymentMethod', e.target.value)
                            }
                            className="w-5 h-5 text-[#D87D4A] border-2 border-[#CFCFCF] focus:ring-[#D87D4A] focus:ring-2"
                          />
                          <span className="text-sm font-bold text-black">
                            e-Money
                          </span>
                        </label>
                        <label className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            checked={form.paymentMethod === 'cash'}
                            onChange={(e) =>
                              handleInputChange('paymentMethod', e.target.value)
                            }
                            className="w-5 h-5 text-[#D87D4A] border-2 border-[#CFCFCF] focus:ring-[#D87D4A] focus:ring-2"
                          />
                          <span className="text-sm font-bold text-black">
                            Cash on Delivery
                          </span>
                        </label>
                      </div>
                    </div>

                    {form.paymentMethod === 'e-money' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                            e-Money Number
                          </label>
                          <input
                            type="text"
                            value={form.eMoneyNumber}
                            onChange={(e) =>
                              handleInputChange('eMoneyNumber', e.target.value)
                            }
                            className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                              errors.eMoneyNumber
                                ? 'border-red-500'
                                : 'border-[#CFCFCF]'
                            }`}
                            placeholder="238521993"
                          />
                          {errors.eMoneyNumber && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.eMoneyNumber}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-black uppercase tracking-wide mb-2">
                            e-Money PIN
                          </label>
                          <input
                            type="text"
                            value={form.eMoneyPin}
                            onChange={(e) =>
                              handleInputChange('eMoneyPin', e.target.value)
                            }
                            className={`w-full border-2 rounded-lg px-4 py-3 text-sm font-bold focus:outline-none focus:border-[#D87D4A] transition-colors duration-200 ${
                              errors.eMoneyPin
                                ? 'border-red-500'
                                : 'border-[#CFCFCF]'
                            }`}
                            placeholder="6891"
                          />
                          {errors.eMoneyPin && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.eMoneyPin}
                            </p>
                          )}
                        </div>
                      </div>
                    )}

                    {form.paymentMethod === 'cash' && (
                      <div className="bg-[#F1F1F1] p-6 rounded-lg">
                        <p className="text-sm text-black/50">
                          The 'Cash on Delivery' option enables you to pay in
                          cash when our delivery courier arrives at your
                          residence. Just make sure your address is correct so
                          that your order will not be cancelled.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h2 className="text-lg font-bold text-black uppercase tracking-wide mb-6">
                Summary
              </h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.map((item) => {
                  const imageSrc = resolveImage(item.image);
                  return (
                    <div
                      key={item.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-[#F1F1F1] rounded-lg flex items-center justify-center overflow-hidden">
                          {imageSrc ? (
                            <img
                              src={imageSrc}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                          ) : (
                            <div className="w-6 h-6 bg-gray-300 rounded"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="font-bold text-black text-sm uppercase">
                            {item.name}
                          </h3>
                          <p className="text-black/50 text-sm font-bold">
                            $ {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <span className="text-black/50 text-sm font-bold">
                        x{item.qty}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase tracking-wide">
                    Total
                  </span>
                  <span className="font-bold text-black">
                    $ {productsTotal.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase tracking-wide">
                    Shipping
                  </span>
                  <span className="font-bold text-black">$ {shipping}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/50 uppercase tracking-wide">
                    VAT (Included)
                  </span>
                  <span className="font-bold text-black">$ {vat}</span>
                </div>
              </div>

              <div className="flex justify-between text-lg font-bold text-black mb-6 pt-4 border-t border-gray-200">
                <span className="uppercase tracking-wide">Grand Total</span>
                <span className="text-[#D87D4A]">
                  $ {total.toLocaleString()}
                </span>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-[#D87D4A] text-white py-4 font-bold text-sm uppercase tracking-wide hover:bg-[#FBAF85] transition-colors duration-200"
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>

      {order && (
        <OrderConfirmationModal order={order} onClose={() => setOrder(null)} />
      )}
    </div>
  );
}
