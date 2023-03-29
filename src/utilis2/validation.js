let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const loginValidation = (username, password) => {
  if (username === '') {
    return {
      valid: false,
      errors: username === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(username) === false) {
    return {
      valid: false,
      errors: reg.test(username) === false ? 'Email format is invalid' : null,
    };
  } else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (password.length < 8) {
    return {
      valid: false,
      errors:
        password.length < 6 ? 'Password must should contain 8 digits' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const Signup_validation = ({ name, email, password }) => {
  const HasNumber = /[0-9]/g
  const HasUpperCase = /[A-Z]/g
  const HasLowerCase = /[a-z]/g
  const HasSymbol = /[!@#$%^&*()_+=\[{\]};:<>|./?,-]/g
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Your Name' : null,
    };
  } else if (name.length < 3) {
    return {
      valid: false,
      errors: name.length < 3 ? 'Name must should contain 3 letters' : null,
    };
  } else if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  }
  else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your Password' : null,
    };
  } else if (password.length < 8) {
    return {
      valid: false,
      errors: password.length < 8
        ? 'Password must should contain 8 digits'
        : null,
    };
  }
  else if (HasNumber.test(password) == false) {
    return {
      valid: false,
      errors: HasNumber.test(password) == false ? "Password Does not have Number" : null
    }
  }
  else if (HasUpperCase.test(password) == false) {
    console.log(HasUpperCase.test(password), 'password');
    return {
      valid: false,
      errors: HasUpperCase.test(password) == false ? "Password Does not have UpperCase" : null
    }
  }
  else if (HasSymbol.test(password) === false) {
    return {
      errors: HasSymbol.test(password) === false ? "Password Does not have Special Character" : null,
      valid: false
    }
  }
  else if (HasLowerCase.test(password) === false) {
    return {
      valid: false,
      errors: HasLowerCase.test(password) === false ? "Password Does not have LowerCase" : null
    }
  }
  else {
    return { valid: true, errors: null };
  }
};

export const addTime = time => {
  if (time === '') {
    return {
      valid: false,
      errors: time === '' ? 'Please Add Time' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};



export const passwordValidation = (password, confirmPassword) => {
  if (oldPassword === '') {
    return {
      valid: false,
      errors: oldPassword === '' ? 'Please Enter Your old Password' : null,
    };
  }
  else if (oldPassword.length < 8) {
    return {
      valid: false,
      errors:
        oldPassword.length < 8 ? 'Your old Password must should contain 8 digits' : null,
    };
  }
  else if (newPassword === '') {
    return {
      valid: false,
      errors: newPassword === '' ? 'Please Enter Your new Password' : null,
    };
  }
  else if (newPassword.length < 8) {
    return {
      valid: false,
      errors:
        newPassword.length < 8 ? 'You new Password must should contain 8 digits' : null,
    };
  }
  else if (confirmPassword === '') {
    return {
      valid: false,
      errors:
        confirmPassword === '' ? 'Please Enter Your Confirm Password' : null,
    };
  } else if (confirmPassword !== password) {
    return {
      valid: false,
      errors: confirmPassword !== password ? 'Enter Confirm Password' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const forgetPasswordValidation = email => {
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};

export const SignUp_Third = ({ bussinessName, address, city, state, zipCode, phone }) => {
  if (bussinessName === '') {
    return {
      valid: false,
      errors: bussinessName === '' ? 'Please Enter Business Name' : null,
    };
  } else if (bussinessName.length < 2) {
    return {
      valid: false,
      errors: bussinessName.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  } else if (address === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  } else if (address.length < 8) {
    return {
      valid: false,
      errors: address.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  } else if (city === "") {
    return {
      valid: false,
      errors: city === "" ? 'Please Enter city' : null,
    };
  } else if (state === "") {
    return {
      valid: false,
      errors: state === "" ? 'Please Enter state' : null,
    };
  } else if (zipCode === "") {
    return {
      valid: false,
      errors: zipCode === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode.length < 5 || zipCode.length > 5) {
    return {
      valid: false,
      errors: zipCode.length < 5 || zipCode.length > 5 ? 'The zip code must have 5 digits' : null,
    };
  }
  else if (phone === "") {
    return {
      valid: false,
      errors: phone === "" ? 'Please Enter phone' : null,
    };
  } else if (phone.length < 10) {
    return {
      valid: false,
      errors: phone.length < 10 ? 'Your Phone Number must be 10 digits' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};

export const addNew_Facility = ({ name, email, phone, address, city, state, zipCode, discription, category, amenity, rules, price, duration }) => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Business Name' : null,
    };
  } else if (name.length < 2) {
    return {
      valid: false,
      errors: name.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  }
  else if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  }

  else if (phone === "") {
    return {
      valid: false,
      errors: phone === "" ? 'Please Enter phone' : null,
    };
  } else if (phone.length < 10) {
    return {
      valid: false,
      errors: phone.length < 10 ? 'Your Phone Number must be 10 digits' : null,
    };
  }

  else if (address === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  }

  else if (address.length < 8) {
    return {
      valid: false,
      errors: address.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  } else if (city === "") {
    return {
      valid: false,
      errors: city === "" ? 'Please Enter city' : null,
    };
  } else if (state === "") {
    return {
      valid: false,
      errors: state === "" ? 'Please Enter state' : null,
    };
  } else if (zipCode === "") {
    return {
      valid: false,
      errors: zipCode === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode.length < 5 || zipCode.length > 5) {
    return {
      valid: false,
      errors: zipCode.length < 5 || zipCode.length > 5 ? 'The zip code must have 5 digits' : null,
    };
  }
  else if (discription === "") {
    return {
      valid: false,
      errors: discription === "" ? 'Please Enter discription' : null,
    };
  }
  else if (discription.length < 30) {
    return {
      valid: false,
      errors: discription.length < 30 ? 'The discription must have 30 Charaters' : null,
    };
  }

  else if (category === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select category' : null,
    };
  }
  else if (category.id < 1) {
    return {
      valid: false,
      errors: category.id < 1 ? 'You have to Select atleast 1 Category' : null,
    };
  }

  else if (amenity === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Amenity' : null,
    };
  }
  else if (amenity.id < 1) {
    return {
      valid: false,
      errors: amenity.id < 1 ? 'You have to Select atleast 1 Amenity' : null,
    };
  }
  else if (rules === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Enter rules' : null,
    };
  }
  else if (rules.length < 20) {
    return {
      valid: false,
      errors: rules.length < 20 ? 'The rules must have 20 Charaters' : null,
    };
  }
  else if (price === "") {
    return {
      valid: false,
      errors: price === "" ? 'Please Enter Price' : null,
    };
  }
  else if (price.length < 3) {
    return {
      valid: false,
      errors: price.length < 3 ? 'The price must be 100 $ or above' : null,
    };
  }
  else if (duration === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Select Duration' : null,
    };
  }
  else if (duration.id < 1) {
    return {
      valid: false,
      errors: duration.id < 1 ? 'You have to Select atleast 1 Hour Duration' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};

export const addSub_Facility = ({ name, price, duration, category, discription, rules }) => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Business Name' : null,
    };
  } else if (name.length < 2) {
    return {
      valid: false,
      errors: name.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  }

  else if (price === "") {
    return {
      valid: false,
      errors: price === "" ? 'Please Enter Price' : null,
    };
  }
  else if (price.length < 3) {
    return {
      valid: false,
      errors: price.length < 3 ? 'The price must be 100 $ or above' : null,
    };
  }

  else if (duration === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Select Duration' : null,
    };
  }
  else if (duration.id < 1) {
    return {
      valid: false,
      errors: duration.id < 1 ? 'You have to Select atleast 1 Hour Duration' : null,
    };
  }

  else if (category === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select category' : null,
    };
  }
  else if (category.id < 1) {
    return {
      valid: false,
      errors: category.id < 1 ? 'You have to Select atleast 1 Category' : null,
    };
  }

  else if (discription === "") {
    return {
      valid: false,
      errors: discription === "" ? 'Please Enter discription' : null,
    };
  }
  else if (discription.length < 30) {
    return {
      valid: false,
      errors: discription.length < 30 ? 'The discription must have 30 Charaters' : null,
    };
  }

  else if (rules === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Enter rules' : null,
    };
  }
  else if (rules.length < 20) {
    return {
      valid: false,
      errors: rules.length < 20 ? 'The rules must have 20 Charaters' : null,
    };
  }

  else {
    return { valid: true, errors: null };
  }
};


export const Add_Sub_Facility_Image = ({ image1, image2, image3 }) => {
  if (image1 === '') {
    return {
      valid: false,
      errors: image1 === '' ? 'Please Select First image' : null,
    };
  }
  else if (image2 === '') {
    return {
      valid: false,
      errors: image2 === '' ? 'Please Select Second image' : null,
    };
  }

  else if (image3 === "") {
    return {
      valid: false,
      errors: image3 === "" ? 'Please Select Third image' : null,
    };
  }

  else {
    return { valid: true, errors: null };
  }
};


export const addNew_Experience = ({ name, email, phone, address, city, state, zipCode, discription, category, facility, subFacilityID, frequency, availableSlots, }) => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Business Name' : null,
    };
  } else if (name.length < 2) {
    return {
      valid: false,
      errors: name.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  }
  else if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  }

  else if (phone === "") {
    return {
      valid: false,
      errors: phone === "" ? 'Please Enter phone' : null,
    };
  } else if (phone.length < 10) {
    return {
      valid: false,
      errors: phone.length < 10 ? 'Your Phone Number must be 10 digits' : null,
    };
  }

  else if (address === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  }

  else if (address.length < 8) {
    return {
      valid: false,
      errors: address.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  } else if (city === "") {
    return {
      valid: false,
      errors: city === "" ? 'Please Enter city' : null,
    };
  } else if (state === "") {
    return {
      valid: false,
      errors: state === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode === "") {
    return {
      valid: false,
      errors: zipCode === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode.length < 5 || zipCode.length > 5) {
    return {
      valid: false,
      errors: zipCode.length < 5 || zipCode.length > 5 ? 'The zip code must have 5 digits' : null,
    };
  }
  else if (discription === "") {
    return {
      valid: false,
      errors: discription === "" ? 'Please Enter discription' : null,
    };
  }
  else if (discription.length < 30) {
    return {
      valid: false,
      errors: discription.length < 30 ? 'The discription must have 30 Charaters' : null,
    };
  }

  else if (category === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select category' : null,
    };
  }
  else if (category.id < 1) {
    return {
      valid: false,
      errors: category.id < 1 ? 'You have to Select atleast 1 Category' : null,
    };
  }

  else if (facility === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Facility_ID' : null,
    };
  }
  else if (facility.id < 2) {
    return {
      valid: false,
      errors: facility.id < 2 ? 'You have to Facility_ID' : null,
    };
  }
  else if (subFacilityID === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Sub_Facility_ID' : null,
    };
  }
  else if (subFacilityID.id < 1) {
    return {
      valid: false,
      errors: subFacilityID.id < 1 ? 'You have to Select atleast 1 Sub_Facility_ID' : null,
    };
  }

  else if (frequency === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Select Frequency' : null,
    };
  }
  else if (frequency.id < 1) {
    return {
      valid: false,
      errors: frequency.id < 1 ? 'You have to Select atleast 1 Frequency' : null,
    };
  }
  else if (availableSlots === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Available Slot' : null,
    };
  }
  else if (availableSlots < 1) {
    return {
      valid: false,
      errors: availableSlots < 1 ? 'You have to Select atleast 1 Available Slot' : null,
    };
  }

  else {
    return { valid: true, errors: null };
  }
};


export const addNew_Service = ({ name, email, phone, address, city, state, zipCode, discription, category, facility, subFacilityID, availableSlots, price, }) => {
  if (name === '') {
    return {
      valid: false,
      errors: name === '' ? 'Please Enter Business Name' : null,
    };
  } else if (name.length < 2) {
    return {
      valid: false,
      errors: name.length < 2 ? 'Business Name must have atleast 2 characters' : null,
    };
  }
  else if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  } else if (reg.test(email) === false) {
    return {
      valid: false,
      errors: reg.test(email) === false ? 'Email format is invalid' : null,
    };
  }

  else if (phone === "") {
    return {
      valid: false,
      errors: phone === "" ? 'Please Enter phone' : null,
    };
  } else if (phone.length < 10) {
    return {
      valid: false,
      errors: phone.length < 10 ? 'Your Phone Number must be 10 digits' : null,
    };
  }

  else if (address === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  }

  else if (address.length < 8) {
    return {
      valid: false,
      errors: address.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  } else if (city === "") {
    return {
      valid: false,
      errors: city === "" ? 'Please Enter city' : null,
    };
  } else if (state === "") {
    return {
      valid: false,
      errors: state === "" ? 'Please Enter state' : null,
    };
  } else if (zipCode === "") {
    return {
      valid: false,
      errors: zipCode === "" ? 'Please Enter zipCode' : null,
    };
  }
  else if (zipCode.length < 5 || zipCode.length > 5) {
    return {
      valid: false,
      errors: zipCode.length < 5 || zipCode.length > 5 ? 'The zip code must have 5 digits' : null,
    };
  }
  else if (discription === "") {
    return {
      valid: false,
      errors: discription === "" ? 'Please Enter discription' : null,
    };
  }
  else if (discription.length < 30) {
    return {
      valid: false,
      errors: discription.length < 30 ? 'The discription must have 30 Charaters' : null,
    };
  }

  else if (category === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select category' : null,
    };
  }
  else if (category.id < 1) {
    return {
      valid: false,
      errors: category.id < 1 ? 'You have to Select atleast 1 Category' : null,
    };
  }

  else if (facility === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Facility_ID' : null,
    };
  }
  else if (facility.id < 2) {
    return {
      valid: false,
      errors: facility.id < 2 ? 'You have to Facility_ID' : null,
    };
  }
  else if (subFacilityID === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Sub_Facility_ID' : null,
    };
  }
  else if (availableSlots === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please Available Slot' : null,
    };
  }
  else if (availableSlots < 1) {
    return {
      valid: false,
      errors: availableSlots < 1 ? 'You have to Select atleast 1 Available Slot' : null,
    };
  }
  else if (price === "") {
    return {
      valid: false,
      errors: price === "" ? 'Please Enter Price' : null,
    };
  }
  else if (price.length < 3) {
    return {
      valid: false,
      errors: price.length < 3 ? 'The price must be 100 $ or above' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};

export const Service_Schdule = ({ Hour, Day, AvailableHour, slot_end_time, MinTime }) => {
  if (Hour === '') {
    return {
      valid: false,
      errors: Hour === '' ? 'Please Select Duration Minimum 60 ' : null,
    };
  } else if (Hour.id < 1) {
    return {
      valid: false,
      errors: Hour.id < 1 ? 'Duration must Be Selected' : null,
    };
  }


  else if (Day === "") {
    return {
      valid: false,
      errors: Day === "" ? 'Please Select Day of Week' : null,
    };
  }

  else if (Day.id < 1) {
    return {
      valid: false,
      errors: Day.id < 1 ? 'Day must be Selected' : null,
    };
  }

  else if (AvailableHour === "") {
    return {
      valid: false,
      errors: AvailableHour === "" ? 'Please Select Available Hour slot' : null,
    };
  }
  else if (AvailableHour.id < 1) {
    return {
      valid: false,
      errors: AvailableHour.id < 1 ? 'Slot must be selected at least once' : null,
    }
  }
  else if (slot_end_time === "") {
    return {
      valid: false,
      errors: slot_end_time === "" ? 'Please Enter slot_end_time' : null,
    };
  }
  else if (slot_end_time.length < 1) {
    return {
      valid: false,
      errors: slot_end_time.length < 1 ? 'The slot_end_time must be selected at least once' : null,
    };
  }

  else if (MinTime === "") {
    return {
      valid: false,
      errors: rules === "" ? 'Please select Minimum break' : null,
    };
  }
  else if (MinTime.id < 1) {
    return {
      valid: false,
      errors: MinTime.id < 1 ? 'You have to Select atleast 1 Minimum break' : null,
    };
  }

  else {
    return { valid: true, errors: null };
  }
};
export const Updtae_Password_Validation = (old_password, password, confirm_password) => {
  if (old_password === '') {
    return {
      valid: false,
      errors: old_password === '' ? 'Please Enter Your old Password' : null,
    };
  }
  else if (old_password.length < 8) {
    return {
      valid: false,
      errors:
        old_password.length < 8 ? 'Your old Password must should contain 8 digits' : null,
    };
  }
  else if (password === '') {
    return {
      valid: false,
      errors: password === '' ? 'Please Enter Your new Password' : null,
    };
  }
  else if (password.length < 8) {
    return {
      valid: false,
      errors:
        password.length < 8 ? 'You new Password must should contain 8 digits' : null,
    };
  }
  else if (confirm_password === '') {
    return {
      valid: false,
      errors:
        confirm_password === '' ? 'Please Enter Your Confirm Password' : null,
    };
  } else if (confirm_password !== password) {
    return {
      valid: false,
      errors: confirm_password !== password ? 'Enter Confirm Password' : null,
    };
  } else {
    return { valid: true, errors: null };
  }
};


export const Add_Bank_Validation = ({ accountN, Rnumber, Tnumber, accountH }) => {
  if (accountN === '') {
    return {
      valid: false,
      errors: accountN === '' ? 'Please Enter Account Number' : null,
    };
  } else if (accountN.length < 12) {
    return {
      valid: false,
      errors: accountN.length < 12 ? 'Account Number must have atleast 12 characters' : null,
    };
  }
  else if (Rnumber === "") {
    return {
      valid: false,
      errors: Rnumber === "" ? 'Please Enter Routing Number' : null,
    };
  } else if (Rnumber.length < 9) {
    return {
      valid: false,
      errors: Rnumber.length < 9 ? 'Your Routing Number must be 9 digits' : null,
    };
  }

  else if (Tnumber === "") {
    return {
      valid: false,
      errors: address === "" ? 'Please Enter address' : null,
    };
  }

  else if (Tnumber.length < 8) {
    return {
      valid: false,
      errors: Tnumber.length < 8 ? 'address must have atleast 8 characters' : null,
    };
  }
  else if (accountH === "") {
    return {
      valid: false,
      errors: accountH === "" ? 'Please Enter Your Name' : null,
    };
  }
  else if (accountH.length < 3) {
    return {
      valid: false,
      errors: accountH.length < 3 ? 'Name must have atleast 8 characters' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};


export const Add_Card_Validation = ({ card_number, exp_month, exp_year, cvc }) => {
  if (card_number === '') {
    return {
      valid: false,
      errors: card_number === '' ? 'Please Enter Card Number' : null,
    };
  } else if (card_number.length < 16) {
    return {
      valid: false,
      errors: card_number.length < 16 ? 'Card Number must have atleast 16 characters' : null,
    };
  }
  else if (exp_month === "") {
    return {
      valid: false,
      errors: exp_month === "" ? 'Please Enter Expiry Date' : null,
    };
  } else if (exp_month.length < 2) {
    return {
      valid: false,
      errors: exp_month.length < 2 ? 'Please Enter Valid Date' : null,
    };
  }

  else if (exp_year === "") {
    return {
      valid: false,
      errors: exp_year === "" ? 'Please Enter Expiry Year' : null,
    };
  }

  // else if (exp_year.length < 3) {
  //   return {
  //     valid: false,
  //     errors: exp_year.length < 3 ? 'Please Enter Valid Year' : null,
  //   };
  // }
  else if (cvc === "") {
    return {
      valid: false,
      errors: cvc === "" ? 'Please Enter CVV Number' : null,
    };
  }
  else if (cvc.length < 3) {
    return {
      valid: false,
      errors: cvc.length < 3 ? 'CVV Number must between 3 to 4 digits' : null,
    };
  }
  else {
    return { valid: true, errors: null };
  }
};

export const Email_Verification = email => {
  if (email === '') {
    return {
      valid: false,
      errors: email === '' ? 'Please Enter Your Email' : null,
    };
  }
  // else if (reg.test(email) === false) {
  //   return {
  //     valid: false,
  //     errors: reg.test(email) === false ? 'Email format is invalid' : null,
  //   };
  // }
  else {
    return { valid: true, errors: null };
  }
};
