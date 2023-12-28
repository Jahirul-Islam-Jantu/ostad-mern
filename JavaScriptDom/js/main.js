// JavaScript DOM: finding an element

const tagName = document.getElementsByTagName("h2"); //ট্যাগ নেম দিয়ে যখন এলিমেন্ট ধরবো তখন মাল্টিপল এলিমেন্ট সিলেক্ট হয়ে এর‍্যে আকারে আসবে।
const className = document.getElementsByClassName("language"); // একই নামের মাল্টিপল ক্লাস থাকতে পারে, তাই এটা এর‍্যে আকারে আসবে।
const idName = document.getElementById("country"); // আইডি সবসময় ইউনিক হয়, তাই আইডি দিয়ে যখন একটা এলিমেন্ট সিলেক্ট করবো তখন সিংগেল এলিমেন্ট আসবে।
const qSelector = document.querySelector(); // সিংগেল আইডি বা ক্লাস আকারে সিলেক্ট করার জন্য এই সিলেক্টর ব্যাবহার করা যায়।
const allqSelect = document.querySelectorAll(); // সকল ক্লাস একবারে সিলেক্ট করার জন্য ব্যাবহার করা হয় ।
