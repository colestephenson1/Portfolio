import type { NextApiRequest, NextApiResponse } from 'next'



type Arr = [{serviceName: string, serviceDescrip: string}, {serviceName: string, serviceDescrip: string}, {serviceName: string, serviceDescrip: string}]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Arr>
) {
  res.status(200).json([
  { serviceName: 'Service1',
  serviceDescrip: 'Descrip1' },
  { serviceName: 'Service2',
  serviceDescrip: 'Descrip2' },
  { serviceName: 'Service3',
  serviceDescrip: 'Descrip3' }
])
}
