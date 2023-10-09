class User {
  // Задаємо масив в якому будемо зберегати списком інформацію про користувачів
  static #list = []

  constructor({ email, password }) {
    this.email = email
    this.password = password
  }

  //Стат метод приймає данні data
  static create(data) {
    //Створює юзера
    const user = new User(data)
    //і додає його в масив list
    this.#list.push(user)
  }
}

module.exports = { User }
