import { GithubFavorites } from "./githubFavorites.js"

/*Classe que vai conter a lógica dos dados
e como os dados serão estruturados*/

export class Favoreites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

        GithubFavorites.search('diego3g').then(user => {})
    }

    load() {
        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []
    }

    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
        const empty = this.root.querySelector('.table .empty')
        const table = this.root.querySelector('.table')
        if (this.entries.length >= 1) {
            empty.style.display = 'none'
            table.style.height = 'auto'
        } else {
            empty.style.display = 'flex'
            table.style.height = '40rem'
        }
    }

    async add(username) {

        try {

            const userExists = this.entries.find(entry => entry.login == username)
            if (userExists) {
                throw new Error('Usuário já cadastrado')
            }
            const user = await GithubFavorites.search(username)

            if (user.login === undefined) {
                throw new Error('Usuário não encontrado')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()

        } catch (error) {
            alert(error.message)
        }
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)
        this.entries = filteredEntries
        this.update()
        this.save()
    }
}


/*Classe que vai criar a visualização e eventos do HTML*/

export class FavoritesView extends Favoreites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector('table tbody')

        this.update()
        this.onadd()
    }

    onadd() {
        const addButton = this.root.querySelector('.search button')
        addButton.onclick = () => {
            const { value } = this.root.querySelector('.search input')
            this.add(value)

        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow();
            row.querySelector('.user img').src = `https://github.com/${user.login}.png`
            row.querySelector('.user img').alt = `imagem de ${user.login}`
            row.querySelector('.user a').href = `https://github.com/${user.login}`
            row.querySelector('.user a p').textContent = `${user.name}`
            row.querySelector('.user a span').textContent = `${user.login}`
            row.querySelector('.repositories').textContent = `${user.public_repos}`
            row.querySelector('.followers').textContent = `${user.followers}`

            row.querySelector('.remove').onclick = () => {
                const isOk = confirm('Tem certeza que deseja deletar este usuário?')
                if (isOk) {
                    this.delete(user)
                }
            }


            this.tbody.append(row)
            const empty = this.root.querySelector('.table .empty')
            const table = this.root.querySelector('.table')
            if (this.entries.length >= 1) {
                empty.style.display = 'none'
                table.style.height = 'auto'
            } else {
                empty.style.display = 'flex'
                table.style.height = '40rem'
            }
        })
    }
    createRow() {
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="user">
          <img src="https://github.com/maykbrito.png" alt="imagem do maykbrito">
          <a href="https://github.com/" target="_blank">
              <p></p>
              <span></span>
          </a>
      </td>
      <td class="repositories">
          76
      </td>
      <td class="followers">9589</td>
      <td><button class="remove">Remover</button></td>
        `
        return tr
    }

    removeAllTr() {
        this.tbody.querySelectorAll('tr').forEach(tr => {
            tr.remove()
        });
    }
}