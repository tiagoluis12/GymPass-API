import { InMemoryUsersRepository } from '@/repositories/in-memory/in-memory-users-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUseCase } from './register'
import { compare } from 'bcryptjs'
import { UserAlreadyExistsError } from '../use-cases/erros/user-already-exists.error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUseCase

describe('Register Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUseCase(usersRepository)
  })
  it('Should be able to register', async () => {
    const { user } = await sut.execute({
      name: 'Tiago Luis',
      email: 'tiago@hotmail.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('Should hash the user password upon registration', async () => {
    const { user } = await sut.execute({
      name: 'Tiago Luis',
      email: 'tiago@hotmail.com',
      password: '123456',
    })

    const isPasswordCorreclyHashed = await compare('123456', user.password_hash)

    expect(isPasswordCorreclyHashed).toBe(true)
  })

  it('Should not be able to register with the same email twice', async () => {
    const email = 'tiago@hotmail.com'

    await sut.execute({
      name: 'Tiago Luis',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'Tiago Luis',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
