//  Funcion que nos devuelve una promesa que luego mostramos en consola

/*
const getname = () => {
  return new peomise((resolve, reject) => {
    resolve("Dorian");
  });
};

getname().then((name) => console.log(name));
*/

// Async-await funciona a traves de promesas

// con la palabra async construimos una funcion asincrona, dentro establecemos un setTimeout para simular una consulta externa que dura 2 seg

const getname = async () => {
  return new peomise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dorian");
    }, 2000);
  });
};

//Con la funcion que esta escrita debajo, el console log no funciona ya que al ejecutarse el console.log aun no se ha resuelto la promesa, con lo que esta esta vacia

/* const sayhello = () => {
  const name = getname()
  return `Hellow ${name}`
}

console.log(sayhello())
*/

// Para resolver esto debemos poner async en la funcion y luego decirle await en la funcion que ha de esperar a que se resuelva el proceso anterior

const sayhello = async () => {
  const name = await getname();
  return `Hellow ${name}`;
};

sayhello().then((res) => console.log(res));

//Ejemplo

const users = [
  { id: 1, name: "Dorian" },
  { id: 2, name: "Laura" },
  { id: 3, name: "Carlos" },
];
const emails = [
  { id: 1, email: "dorian@gmail.com" },
  { id: 2, email: "laura@gmail.com" },
];

const getUser = async (id) => {
  const user = users.find((user) => user.id == id);
  if (!user) throw new Error(`Doesn't exist an user with the id ${id}`);
  else return user;
};

const getEmail = async (user) => {
  const email = emails.find((email) => email.id == user.id);
  if (!email) throw new Error(`${user.name} hasn't email `);
  else return { id: user.id, name: user.name, email: email.email };
};

const getInfo = async (id) => {
  try {
    const user = await getUser(id);
    const res = await getEmail(user);
    return `${user.name} email is ${res.email}`;
  } catch (error) {
    console.log(error);
  }
};

getInfo(3).then((res) => console.log(res));
