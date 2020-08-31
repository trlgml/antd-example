import services from '@/services';

export const get = () => {
  return services.get('/users')
}