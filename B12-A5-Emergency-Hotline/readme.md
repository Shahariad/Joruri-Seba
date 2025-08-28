1. getElementById, getElementsByClassName, querySelector, querySelectorAll er difference

getElementById("id")
Sudhu ekta id select kore.
Ekdom ekta element dibe.

getElementsByClassName("className")
Oi class name thaka shob element dibe.
Eta ekta "HTMLCollection" (array moto, but pura array na).

querySelector("css selector")
CSS selector er moto likhe ekta element select kora jay.
Sudhu first match element return kore.

querySelectorAll("css selector")
CSS selector er moto likhe shob element select kore.
Eta ekta NodeList (array er moto).

2. Create and insert a new element into the DOM
   Create element → document.createElement("tag")
   Text boshano → element.innerText = "text";
   Insert kora → parent.appendChild(element)

3. Event Bubbling
   Event bubbling mane hocche kono element e event ghotle,
   seta uporer parent element gulo teo uthe jay.

4. Event Delegation
   Event Delegation mane hocche parent element e event listener boshai, ar child element er kaj handle kori.
   Karone event bubbling ache bole eta possible.

5. preventDefault() vs stopPropagation()
   preventDefault() = default kaj bondho koro.
   stopPropagation() = upor parent e event jete debe na.
