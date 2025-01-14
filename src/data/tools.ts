export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'Network' | 'Web' | 'Forensics' | 'Cryptography' | 'Other';
  icon: string;
}

export const tools: Tool[] = [
  {
    id: 'wireshark',
    name: 'Wireshark',
    description: 'Network protocol analyzer for network troubleshooting and analysis',
    url: 'https://www.wireshark.org',
    category: 'Network',
    icon: 'network',
  },
  {
    id: 'burp-suite',
    name: 'Burp Suite',
    description: 'Platform for performing security testing of web applications',
    url: 'https://portswigger.net/burp',
    category: 'Web',
    icon: 'bug',
  },
  {
    id: 'metasploit',
    name: 'Metasploit',
    description: 'Penetration testing framework that makes hacking simple',
    url: 'https://www.metasploit.com',
    category: 'Network',
    icon: 'shield',
  },
  {
    id: 'john',
    name: 'John the Ripper',
    description: 'Password cracker featuring lots of different types of password/hash cracking',
    url: 'https://www.openwall.com/john',
    category: 'Cryptography',
    icon: 'key',
  },
];