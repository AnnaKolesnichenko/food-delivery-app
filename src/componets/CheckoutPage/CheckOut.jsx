const CheckOut = () => {
  return (
    <div>
      <h2>Total amount</h2>
      <span>amount</span>
      <form>
        <label htmlFor="name">Full Name</label>
        <input type="text" />
        <label htmlFor="email">Email Address</label>
        <input type="email" />
        <label htmlFor="phone">Phone Number</label>
        <input type="number" />
        <label htmlFor="street">Street</label>
        <input type="text" />
        <div>
          <label htmlFor="postal">Postal Code</label>
          <input type="number" />
          <label htmlFor="city">City</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
