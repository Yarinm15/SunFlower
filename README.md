# Test Standard

## Test Purpose
The purpose of this test is to validate the **user registration process** and **product selection functionality** on the website.  
The test ensures that:  
- A user can successfully **register** with valid credentials.  
- The **selected product** appears correctly in the shopping cart.  

This test is crucial for verifying the integrity of the registration workflow and ensuring an **optimal shopping experience**.

---

## Preconditions

To ensure the test runs smoothly, the following conditions must be met:

### **User Account Constraints**
- The email used for registration must be **unique** to avoid conflicts.
- The password must meet website **security requirements** (e.g., minimum length, special characters, etc.).

### **Test Data Availability**
- If specific test data is required (e.g., **predefined names or email**), make sure they are accessible (either **hard-coded or generated**).

### **Test Dependencies**
- This test assumes that **registration functionality** and the **product catalog** are operational.
- No dependencies on other test cases, as this is a **self-contained end-to-end workflow**.
- If a test run fails, it should be able to **start fresh** without external setup.

---

## Steps to Execute

### **1. Open the Website**
- Navigate to [Demo Web Shop](https://demowebshop.tricentis.com).
- Ensure that the **homepage loads successfully**.

### **2. Click on "Register"**
- Locate the **"Register"** button in the navigation bar.
- Click it to open the **registration form**.

### **3. Fill Registration Form**
- Select **gender**.
- Enter **first and last name**.
- Provide a **valid and unique email address**.
- Create and confirm a **password** that meets security requirements.

### **4. Submit the Registration Form**
- Ensure that **all fields** are correctly filled before submission.
- Click **"Register"** to complete the registration process.

### **5. Click on "Continue"**
- After successful registration, a **confirmation message** should appear.
- Click on the **"Continue"** button to proceed to the homepage.

### **6. Validate Email in Header**
- Verify that the newly **registered email** appears in the top navigation bar.
- This confirms **successful authentication**.

### **7. Navigate to "Digital Downloads"**
- Locate the **"Digital Downloads"** category in the main menu.
- Click it to view the available **digital products**.

### **8. Select and Add a Product to Cart**
- Choose any **random product** from the list.
- Click **"Add to Cart"**.
- Ensure a **confirmation message** appears indicating the item was added successfully.

### **9. Go to the Shopping Cart**
- Click the **"Shopping Cart"** link to open the cart page.
- Ensure that the **cart page loads correctly**.

### **10. Verify Product in Cart**
- Retrieve the **name and details** of the selected product.
- Compare them with the **product information displayed in the shopping cart**.
- If they **match**, the test is considered **successful**.

### Expected Results

#### **Website Navigation**
✅ The **homepage** loads completely with all elements visible.  
✅ The **registration page** opens when clicking **"Register"**.

#### **Registration Process**
✅ All form fields **accept valid input**.  
✅ After clicking **"Register"**, a **success message** appears.  
✅ The **"Continue"** button redirects to the **homepage**.

#### **Authentication Verification**
✅ The user's **email appears in the header**, confirming successful login.  
✅ The user has access to all **authenticated user features**.

#### **Product Selection**
✅ The **Digital Downloads** page displays a list of available products.  
✅ The **"Add to Cart"** button functions correctly.  
✅ A **confirmation message** appears when an item is added to the cart.

#### **Shopping Cart Functionality**
✅ The **shopping cart page** displays all added items.  
✅ The **product name, quantity, and price** match what was selected.  
✅ The cart **accurately calculates totals** if applicable.

---

## Post-Conditions
- In this specific test, there is no necessity to clear browsering data at the end of each test run.
- Each test is executed in isolation, with a new user session created for every individual test.
- As the state of one user does not impact the subsequent test, clearing browsering data is not required.
- If the main test involved multiple tests with dependencies between them, the management would be handled manually.
  
---

## Validation Criteria

### **Successful Registration**
✅ The user **registers without errors**.  
✅ The registered **email appears in the website's header**, indicating a logged-in session.

### **Correct Product Selection**
✅ The **product added to the cart** matches the one selected from **Digital Downloads**.  
✅ No **duplicate or incorrect items** appear in the cart.  

🚀 **Test is considered successful only when all validation criteria are met.**
