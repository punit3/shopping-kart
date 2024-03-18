
class User {
    constructor(id, username, email) {
      this.id = id;
      this.username = username;
      this.email = email;
      this.cart = []; // User's shopping cart
    }
  
    addToCart(product) {
      // Add a product to the user's cart
      this.cart.push(product);
    }
  
    removeFromCart(productId) {
      // Remove a product from the user's cart based on the productId
      this.cart = this.cart.filter(product => product.id !== productId);
    }
  
    checkout() {
      // Process the user's cart for checkout
      // Additional logic can be added, such as updating inventory, processing payments, etc.
      const totalAmount = this.cart.reduce((sum, product) => sum + product.price, 0);
      console.log(`Checkout completed. Total amount: $${totalAmount}`);
      this.cart = []; // Clear the cart after checkout
    }
  }
  
  export default User;
  