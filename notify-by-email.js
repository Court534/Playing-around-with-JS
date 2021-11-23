const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (text) => {
  return `Text sent to: ${text}`;
}

const notify = (emailOrPhone, notifyFunction) => {
  return notifyFunction(emailOrPhone);
}

console.log(notify('courtney@email.com', notifyByEmail));
console.log(notify('12345678910', notifyByText));