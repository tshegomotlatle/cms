import { AutheticationRepostiory } from '@cms-authentication-repository';
import { PrismaClient } from '@prisma/client';
import { LawyerRepository } from './lawyer-repository';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { Lawyer, UpdateLawyerRequest } from '@cms-models';

describe('LawyerRepository', () => {
  let lawyerRepo: LawyerRepository;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    lawyerRepo = new LawyerRepository(prisma);
  });

  it('should be defined', () => {
    expect(new LawyerRepository(new PrismaClient())).toBeDefined();
  });

  it('should get a lawyer based on email', async () => {
    prisma.lawyer.findUnique.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    })
    const lawyer = await lawyerRepo.GetLawyerByEmail("tshegomotlatle.dev@gmail.com");
    expect(lawyer).toBeDefined();
    expect(lawyer?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(lawyer?.name).toEqual("Tshego");
    expect(lawyer?.surname).toEqual("Motlatle");
    expect(lawyer?.mobileNumber).toEqual("0812198232");
  });

  it('should edit a lawyer', async () => {
    const editLawyerRequest: UpdateLawyerRequest = {
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }
  
    prisma.lawyer.update.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    });

    const editedLawyer = await lawyerRepo.UpdateLawyer(editLawyerRequest);
    expect(editedLawyer?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(editedLawyer?.mobileNumber).toEqual("0812198232");
    expect(editedLawyer?.name).toEqual("Tshego");
    expect(editedLawyer?.surname).toEqual("Motlatle");

  });

  it('should register a lawyer', async () => {
    const lawyerRegisterRequest: Lawyer = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    prisma.lawyer.create.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    });

    const lawyer = await lawyerRepo.AddLawyer(lawyerRegisterRequest);
    expect(lawyer).toBeDefined();
    expect(lawyer?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(lawyer?.mobileNumber).toEqual("0812198232");
    expect(lawyer?.name).toEqual("Tshego");
    expect(lawyer?.surname).toEqual("Motlatle");

  });

  it('should get a user based on id', async () => {
    prisma.lawyer.findUnique.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    })

    const lawyer = await lawyerRepo.GetLawyerById("1234");
    expect(lawyer).toBeDefined();
    expect(lawyer?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(lawyer?.name).toEqual("Tshego");
    expect(lawyer?.surname).toEqual("Motlatle");
    expect(lawyer?.mobileNumber).toEqual("0812198232");
  });

  it('should delete a lawyer', async () => {
    prisma.lawyer.delete.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    })
    const lawyer = await lawyerRepo.DeleteLawyer("1234");
    expect(lawyer).toBeDefined();
    expect(lawyer?.email).toEqual("tshegomotlatle.dev@gmail.com");
    expect(lawyer?.mobileNumber).toEqual("0812198232");
    expect(lawyer?.name).toEqual("Tshego");
    expect(lawyer?.surname).toEqual("Motlatle");
  });
});
