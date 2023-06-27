// ex 1
const myArray = {
    name: "Tima",
    age: 13,
    city: "Kyiv",
    occupation: "student",
  };
  myArray.age = 14;
  console.log(myArray.school);
  // ex 2
  const collection = [
    {
      name: "apple",
      price: 10,
      isSale: true,
      color: null,
      category: ["fruis", "sale", "fresh"],
      location: {
        city: "Kyiv",
        address: "solom 4/2",
        store: "atb",
      },
      owner: undefined,
    },
    {
      name: "banana",
      price: 8,
      isSale: false,
      color: null,
      category: ["fruis", "new"],
      location: {
        city: "Lviv",
        address: "sol 5/3",
        store: "novus",
      },
      owner: undefined,
    },
    {
      name: "potato",
      price: 5,
      isSale: true,
      color: null,
      category: ["vegitable", "sale"],
      location: {
        city: "Lviv",
        address: "solomen 2/1",
        store: "billa",
      },
      owner: undefined,
    },
  ];
  console.log(collection);
  // ex 3
  const apartment = {
    imgUrl: "https://via.placeholder.com/640x480",
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
    tags: ["premium", "promoted", "top"],
    owner: {
      name: "Henry",
      phone: "982-126-1588",
      email: "henry.carter@aptmail.com",
    },
  };
  const aptRating = apartment.rating;
  const aptDescr = apartment.descr;
  const aptPrice = apartment.price;
  const aptTags = apartment.tags;
  const ownerName = apartment.owner.name;
  const ownerPhone = apartment.owner.phone;
  const ownerEmail = apartment.owner.email;
  const numberOfTags = apartment.tags.length;
  const firstTag = apartment.tags[0];
  const lastTag = apartment.tags[2];
  const aptRating2 = apartment["raiting"];
  const aptDescr2 = apartment["descr"];
  const aptPrice2 = apartment["price"];
  const aptTags2 = apartment["tags"];
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = "Henry Sibola";
  apartment.tags.push("trusted");
  apartment.area = 60;
  apartment.room = 3;
  apartment.rooms = {
    country: "Jamaica",
    city: "Kingston",
  };
  // ex 4
  const name = "Repair Droid";
  const price = 2500;
  const image = "https://via.placeholder.com/640x480";
  const tags = ["on sale", "trending", "best buy"];
  const product = {
    name,
    price,
    image,
    tags,
  };
  // ex 5
  const emailInputName = "email";
  const passwordInputName = "password";
  const credentials = {
    emailInputName: "henry.carter@aptmail.com",
    passwordInputName: "jqueryismyjam",
  };
  