function reverseString(str){
   var list_of_string=str.split("");
   var reverse=list_of_string.reverse();
   var reverseStr=reverse.join('');
   return reverseStr;
}

function Palindrome(str){
    var reverseValue =reverseString(str);
    return str === reverseValue;
}

function convertDateToString(date){
   var dateStr={
    day: '',
    month: '',
    year: ''
   };

   if(date.day < 10)
   {
    dateStr.day="0"+date.day;
   }
   else{
    dateStr.day=date.day;
   }

   if(date.month < 10)
   {
    dateStr.month="0"+date.month;
   }
   else{
    dateStr.month=date.month;
   }
   dateStr.year=date.year;

   return dateStr;

}

function All_Date_format(date){
    var dateString = convertDateToString(date);

    var ddmmyyyy = dateString.day + dateString.month + dateString.year;
    var mmddyyyy = dateString.month + dateString.day + dateString.year;
    var yyyymmdd = dateString.year + dateString.month + dateString.day;
    var ddmmyy   = dateString.day + dateString.month + dateString.year.slice(-2);
    var mmddyy   = dateString.month + dateString.day + dateString.year.slice(-2);
    var yymmdd   = dateString.year.slice(-2) + dateString.month + dateString.day;
    
    return [ddmmyyyy ,mmddyyyy ,yyyymmdd ,ddmmyy ,mmddyy ,yymmdd];
}
var date = {
    day :5,
    month :9,
    year :2020
}
console.log(All_Date_format(date));