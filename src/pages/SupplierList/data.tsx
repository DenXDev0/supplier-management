import { FaUserGroup, FaUserPlus, FaPersonWalkingDashedLineArrowRight, FaStopwatch } from "react-icons/fa6";
import { PiChartLineUp, PiChartLineDown } from "react-icons/pi";

export interface DataType {
  key: string;
  name: string;
  code: string;
  alias: string;
  address: string;
  contact: string;
  status: string;
}

export const cardData = [
  {
    title: 'Total Supplier',
    value: '1,869',
    icon: <FaUserGroup />,
    change: <span style={{ color: 'green' }}><PiChartLineUp /> +8% vs Last Year</span>,
  },
  {
    title: 'New Supplier',
    value: '27',
    icon: <FaUserPlus />,
    change: <span style={{ color: 'green' }}><PiChartLineUp /> +1% vs Last Year</span>,
  },
  {
    title: 'Avg Cost per Supplier',
    value: 'Rp 320,3 Mn',
    icon: <FaPersonWalkingDashedLineArrowRight />,
    change: <span style={{ color: 'red' }}><PiChartLineDown /> -1% vs Last Year</span>,
  },
  {
    title: 'Blocked Supplier',
    value: '31',
    icon: <FaStopwatch />,
    change: <span style={{ color: 'red' }}><PiChartLineDown /> -4% vs Last Year</span>,
  },
];

export const fullData: DataType[] = [
  {
    key: '1',
    name: 'PT Setroom Indonesia',
    code: 'STRM 61000012',
    alias: 'Setroom',
    address: 'Jakarta, Indonesia',
    contact: 'Albert Einstein',
    status: 'Active',
  },
  {
    key: '2',
    name: 'PT Suka Suka',
    code: 'SKSK 41000013',
    alias: 'Sukasuka',
    address: 'Bandung, Indonesia',
    contact: 'James Lee',
    status: 'In Progress',
  },
  {
    key: '3',
    name: 'PT Angin Ribut',
    code: 'ARIB 41000014',
    alias: 'Angin',
    address: 'Denpasar, Indonesia',
    contact: 'Marie Curie',
    status: 'Blocked',
  },
  {
    key: '4',
    name: 'PT Laut Tenang',
    code: 'LTNG 32000015',
    alias: 'Laut',
    address: 'Surabaya, Indonesia',
    contact: 'Isaac Newton',
    status: 'Active',
  },
  {
    key: '5',
    name: 'PT Gunung Merapi',
    code: 'GMRP 22000016',
    alias: 'Merapi',
    address: 'Yogyakarta, Indonesia',
    contact: 'Galileo Galilei',
    status: 'In Progress',
  },
  {
    key: '6',
    name: 'PT Petir Kilat',
    code: 'PTRK 11000017',
    alias: 'Petir',
    address: 'Medan, Indonesia',
    contact: 'Nikola Tesla',
    status: 'Blocked',
  },
  {
    key: '7',
    name: 'PT Bumi Hijau',
    code: 'BMHJ 21000018',
    alias: 'Bumi',
    address: 'Palembang, Indonesia',
    contact: 'Ada Lovelace',
    status: 'Active',
  },
  {
    key: '8',
    name: 'PT Langit Cerah',
    code: 'LGCH 51000019',
    alias: 'Langit',
    address: 'Semarang, Indonesia',
    contact: 'Stephen Hawking',
    status: 'In Progress',
  },
  {
    key: '9',
    name: 'PT Matahari Terbit',
    code: 'MHTR 31000020',
    alias: 'Matahari',
    address: 'Makassar, Indonesia',
    contact: 'Niels Bohr',
    status: 'Blocked',
  },
  {
    key: '10',
    name: 'PT Bintang Timur',
    code: 'BNTM 61000021',
    alias: 'Bintang',
    address: 'Manado, Indonesia',
    contact: 'Rosalind Franklin',
    status: 'Active',
  },
  {
    key: '11',
    name: 'PT Ombak Laut',
    code: 'OMBL 72000022',
    alias: 'Ombak',
    address: 'Padang, Indonesia',
    contact: 'Michael Faraday',
    status: 'In Progress',
  },
  {
    key: '12',
    name: 'PT Hujan Deras',
    code: 'HJDR 81000023',
    alias: 'Hujan',
    address: 'Pontianak, Indonesia',
    contact: 'Carl Sagan',
    status: 'Blocked',
  },
  {
    key: '13',
    name: 'PT Salju Putih',
    code: 'SLJP 92000024',
    alias: 'Salju',
    address: 'Jayapura, Indonesia',
    contact: 'Jane Goodall',
    status: 'Active',
  },
  {
    key: '14',
    name: 'PT Pelangi Warna',
    code: 'PLGW 83000025',
    alias: 'Pelangi',
    address: 'Kupang, Indonesia',
    contact: 'Richard Feynman',
    status: 'In Progress',
  },
  {
    key: '15',
    name: 'PT Cakrawala Global',
    code: 'CKGL 99000026',
    alias: 'Cakrawala',
    address: 'Balikpapan, Indonesia',
    contact: 'Katherine Johnson',
    status: 'Blocked',
  },
];

