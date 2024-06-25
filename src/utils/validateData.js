export const validateData = (email,password,fullname)=>{
    const isEmailValid = (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email);
    const isPasswordValid = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).test(password);
    const isFullNameValid = (/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/).test(fullname)

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    if(fullname && !isFullNameValid) return "Full Name is not valid";
    return null
}