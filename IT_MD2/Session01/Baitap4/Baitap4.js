const sendMail = (name,companyName) => `
Dear ${name},
Thank you for purchasing our  product. We hope you enjoy it.
Best regards,
${companyName}
`;
console.log(`${sendMail("MINH ANH","LOGITEC")}`);
