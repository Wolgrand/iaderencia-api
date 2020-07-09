"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeNotificationsRepository = _interopRequireDefault(require("../../notifications/repositories/fakes/FakeNotificationsRepository"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

var _FakeAppointmentsRepository = _interopRequireDefault(require("../repositories/fakes/FakeAppointmentsRepository"));

var _CreateAppointmentService = _interopRequireDefault(require("./CreateAppointmentService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeNotificationsRepository;
let fakeAppointmentsRepository;
let fakeCacheProvider;
let createAppointment;
describe('Create Appointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new _FakeAppointmentsRepository.default();
    fakeNotificationsRepository = new _FakeNotificationsRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    createAppointment = new _CreateAppointmentService.default(fakeAppointmentsRepository, fakeNotificationsRepository, fakeCacheProvider);
  });
  it('should be able to create a new apointment', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });
    const appointment = await createAppointment.execute({
      date: new Date(2020, 5, 10, 13),
      provider_id: '123123',
      user_id: 'user-id'
    });
    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });
  it('should not be able to create two apointments on the same time', async () => {
    const appointmentDate = new Date(2020, 5, 19, 11);
    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
      user_id: 'user-id'
    });
    await expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '123123',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an apointment on a past date', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 5, 10, 11),
      provider_id: '123123',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an apointment with same user as provider', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 5, 10, 11),
      provider_id: '123123',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
  it('should not be able to create an apointment before 8am and after 5pm', async () => {
    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 5, 10, 12).getTime();
    });
    await expect(createAppointment.execute({
      date: new Date(2020, 5, 11, 7),
      provider_id: '123123',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
    await expect(createAppointment.execute({
      date: new Date(2020, 5, 11, 18),
      provider_id: '123123',
      user_id: 'user-id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});