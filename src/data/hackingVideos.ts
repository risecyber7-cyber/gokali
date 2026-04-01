export interface HackingVideo {
  id: string;
  title: string;
  channel: string;
  language: 'English' | 'Hindi';
  category: string;
}

export const hackingVideos: HackingVideo[] = [
  // === KALI LINUX BASICS ===
  // English
  { id: 'lZAoFs75_cs', title: 'Kali Linux Tutorial for Beginners', channel: 'NetworkChuck', language: 'English', category: 'Kali Linux Basics' },
  { id: 'U1w4T03B30I', title: 'Kali Linux Full Course 2024', channel: 'Edureka', language: 'English', category: 'Kali Linux Basics' },
  { id: 'fNzpcB7ODxQ', title: 'Kali Linux Complete Beginner Guide', channel: 'NetworkChuck', language: 'English', category: 'Kali Linux Basics' },
  { id: '3FNYvj2U0HM', title: 'Linux for Hackers', channel: 'NetworkChuck', language: 'English', category: 'Kali Linux Basics' },
  { id: 'OnhF_WaB8fc', title: 'Kali Linux Setup Tutorial', channel: 'David Bombal', language: 'English', category: 'Kali Linux Basics' },
  { id: 'JQ2G0FIFg4M', title: 'Kali Linux for Ethical Hacking', channel: 'HackerSploit', language: 'English', category: 'Kali Linux Basics' },
  { id: 'StOBEq85M4o', title: 'Install Kali Linux 2025 - Complete Guide', channel: 'David Bombal', language: 'English', category: 'Kali Linux Basics' },
  // Hindi
  { id: 'BmFMvkNxfmw', title: 'Kali Linux Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Kali Linux Basics' },
  { id: 'g_N2QvAcuPE', title: 'Kali Linux Installation Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Kali Linux Basics' },
  { id: 'USqVD3S36X0', title: 'Linux Full Course Hindi', channel: 'CodeWithHarry', language: 'Hindi', category: 'Kali Linux Basics' },
  { id: 'hTB0Fy67JVk', title: 'Ethical Hacking Hindi Complete', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Kali Linux Basics' },

  // === NMAP SCANNING ===
  // English
  { id: '4t4kBkMsDbQ', title: 'Nmap Tutorial for Beginners', channel: 'NetworkChuck', language: 'English', category: 'Nmap Scanning' },
  { id: '5MTZdN9TEO4', title: 'Advanced Nmap Techniques', channel: 'David Bombal', language: 'English', category: 'Nmap Scanning' },
  { id: 'YF8m0E8ot2c', title: 'Nmap Complete Guide', channel: 'HackerSploit', language: 'English', category: 'Nmap Scanning' },
  { id: 'uMGAO6SVYu0', title: 'Nmap Scripting Engine', channel: 'HackerSploit', language: 'English', category: 'Nmap Scanning' },
  { id: '4gR562GW7TI', title: 'Nmap Network Discovery', channel: 'David Bombal', language: 'English', category: 'Nmap Scanning' },
  { id: 'YThJX3bJU3I', title: 'Nmap Port Scanning Tutorial', channel: 'The Cyber Mentor', language: 'English', category: 'Nmap Scanning' },
  // Hindi
  { id: 'a7hVk8v_29s', title: 'Nmap Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Nmap Scanning' },
  { id: '0XWLTdQN-ns', title: 'Network Scanning Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Nmap Scanning' },

  // === METASPLOIT FRAMEWORK ===
  // English
  { id: '8lR27r8Y_ik', title: 'Metasploit Tutorial for Beginners', channel: 'HackerSploit', language: 'English', category: 'Metasploit' },
  { id: '3Kq1MIfTWCE', title: 'Metasploit Framework Complete', channel: 'The Cyber Mentor', language: 'English', category: 'Metasploit' },
  { id: 'aRwxsn9ZEQw', title: 'Meterpreter Shell Tutorial', channel: 'John Hammond', language: 'English', category: 'Metasploit' },
  { id: 'xMW7iNVH8j4', title: 'Metasploit Payloads Guide', channel: 'HackerSploit', language: 'English', category: 'Metasploit' },
  { id: 'rfgKgvZE9rk', title: 'Metasploit Payloads Explained', channel: 'David Bombal', language: 'English', category: 'Metasploit' },
  // Hindi
  { id: 'qxqf9h3F-OI', title: 'Metasploit Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Metasploit' },
  { id: 'JU2Dj_r8TH4', title: 'Metasploit Framework Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Metasploit' },

  // === BURP SUITE WEB TESTING ===
  // English
  { id: 'G3hpAeoZ4ek', title: 'Burp Suite Tutorial for Beginners', channel: 'The Cyber Mentor', language: 'English', category: 'Burp Suite' },
  { id: 'QoE8M-LVyp0', title: 'Burp Suite Complete Guide', channel: 'HackerSploit', language: 'English', category: 'Burp Suite' },
  { id: 'h2duGBZLEek', title: 'Web Application Testing with Burp', channel: 'Null Byte', language: 'English', category: 'Burp Suite' },
  { id: 'LSqC9qgEMi0', title: 'Burp Suite Basics', channel: 'John Hammond', language: 'English', category: 'Burp Suite' },
  { id: 'ouDe5sJ_uC8', title: 'Burp Suite Extensions', channel: 'LiveOverflow', language: 'English', category: 'Burp Suite' },
  { id: 'ypL5mPmq9I0', title: 'Burp Suite Pro Features', channel: 'Rana Khalil', language: 'English', category: 'Burp Suite' },
  // Hindi
  { id: 'ZgBz-XgJEUw', title: 'Burp Suite Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Burp Suite' },
  { id: 'Xq1UX9I_xYA', title: 'Web Hacking Burp Suite Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Burp Suite' },

  // === WIFI HACKING ===
  // English
  { id: 'WfYxrLaqlN8', title: 'WiFi Hacking with Aircrack-ng', channel: 'NetworkChuck', language: 'English', category: 'WiFi Hacking' },
  { id: 'e2ZzTZoZ4wY', title: 'Wireless Network Hacking Guide', channel: 'David Bombal', language: 'English', category: 'WiFi Hacking' },
  { id: 'lYd0gVzVBQU', title: 'WPA2 Cracking Tutorial', channel: 'HackerSploit', language: 'English', category: 'WiFi Hacking' },
  { id: 'OchR_svVkQI', title: 'Evil Twin Attack Tutorial', channel: 'Null Byte', language: 'English', category: 'WiFi Hacking' },
  { id: 'sbhP_T9-v7g', title: 'Aircrack-ng Complete Tutorial', channel: 'John Hammond', language: 'English', category: 'WiFi Hacking' },
  // Hindi
  { id: 'KM_mHc8Cj94', title: 'WiFi Hacking Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'WiFi Hacking' },
  { id: 'pHzsPsjY8Nc', title: 'WiFi Password Cracking Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'WiFi Hacking' },

  // === SQL INJECTION ===
  // English
  { id: 'ciNHn38EyRc', title: 'SQL Injection Tutorial', channel: 'The Cyber Mentor', language: 'English', category: 'SQL Injection' },
  { id: 'cx6Xs3F_1Uc', title: 'SQLMap Complete Guide', channel: 'HackerSploit', language: 'English', category: 'SQL Injection' },
  { id: '2OPVViV-GQk', title: 'Advanced SQL Injection', channel: 'LiveOverflow', language: 'English', category: 'SQL Injection' },
  { id: 'X6NPKjGtm2g', title: 'Blind SQL Injection', channel: 'John Hammond', language: 'English', category: 'SQL Injection' },
  { id: '1nJgupaUPEQ', title: 'SQL Injection CTF', channel: 'IppSec', language: 'English', category: 'SQL Injection' },
  { id: 'oZDqAbWxOV8', title: 'SQL Injection Deep Dive', channel: 'Rana Khalil', language: 'English', category: 'SQL Injection' },
  // Hindi
  { id: 'e1Ok8qKRFHo', title: 'SQL Injection Hindi Tutorial', channel: 'Technical Sagar', language: 'Hindi', category: 'SQL Injection' },
  { id: 'rQw4WEMDlH4', title: 'SQLMap Tutorial Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'SQL Injection' },

  // === XSS ATTACKS ===
  // English
  { id: 'EoaDgUgS6QA', title: 'XSS Attack Tutorial Complete', channel: 'The Cyber Mentor', language: 'English', category: 'XSS Attacks' },
  { id: 'L5l9lSnNMxg', title: 'Cross Site Scripting Explained', channel: 'LiveOverflow', language: 'English', category: 'XSS Attacks' },
  { id: 'SHmQ3sQhSJA', title: 'DOM XSS Tutorial', channel: 'John Hammond', language: 'English', category: 'XSS Attacks' },
  { id: 'M_nIIcKTxGk', title: 'Stored XSS Attack Guide', channel: 'HackerSploit', language: 'English', category: 'XSS Attacks' },
  { id: 'QJzkifQ-Cuk', title: 'XSS in Bug Bounty', channel: 'Nahamsec', language: 'English', category: 'XSS Attacks' },
  { id: 'KHwVjzWei1c', title: 'XSS Attacks Explained', channel: 'Rana Khalil', language: 'English', category: 'XSS Attacks' },
  // Hindi
  { id: 'xCKZVHCN6bg', title: 'XSS Attack Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'XSS Attacks' },
  { id: 'l5x4lFcWHww', title: 'Cross Site Scripting Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'XSS Attacks' },

  // === PASSWORD CRACKING ===
  // English
  { id: 'XjVYl1Ts6XI', title: 'Password Cracking with Hashcat', channel: 'NetworkChuck', language: 'English', category: 'Password Cracking' },
  { id: 'z4_oqTZJqCo', title: 'John the Ripper Tutorial', channel: 'HackerSploit', language: 'English', category: 'Password Cracking' },
  { id: 'wgG-id3sqng', title: 'Hydra Brute Force Attack', channel: 'The Cyber Mentor', language: 'English', category: 'Password Cracking' },
  { id: 'GKY_yKhHWMQ', title: 'Password Hash Cracking', channel: 'John Hammond', language: 'English', category: 'Password Cracking' },
  { id: 'pZ1M6H5c1Sg', title: 'Hashcat Tutorial Complete', channel: 'David Bombal', language: 'English', category: 'Password Cracking' },
  // Hindi
  { id: 'mNLU9-NGKXI', title: 'Password Cracking Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Password Cracking' },
  { id: 'nHv-BbsMcg0', title: 'Hashcat Tutorial Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Password Cracking' },

  // === SOCIAL ENGINEERING ===
  // English
  { id: 'lc7scxvKQOo', title: 'Social Engineering Toolkit', channel: 'The Cyber Mentor', language: 'English', category: 'Social Engineering' },
  { id: 'uvDYv1jkXuE', title: 'SET Framework Complete', channel: 'HackerSploit', language: 'English', category: 'Social Engineering' },
  { id: 'SDjyKh7NJl0', title: 'Credential Harvesting', channel: 'John Hammond', language: 'English', category: 'Social Engineering' },
  { id: '4UNpH_jq8bY', title: 'Phishing Tutorial', channel: 'NetworkChuck', language: 'English', category: 'Social Engineering' },
  // Hindi
  { id: 'MqCj9E1mXrU', title: 'Social Engineering Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Social Engineering' },
  { id: 'DaQKH1YPUI8', title: 'Phishing Attack Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Social Engineering' },

  // === PRIVILEGE ESCALATION ===
  // English
  { id: 'VpNaPAh93vE', title: 'Linux Privilege Escalation', channel: 'The Cyber Mentor', language: 'English', category: 'Privilege Escalation' },
  { id: 'oYHAi0cgur4', title: 'Windows PrivEsc Complete', channel: 'HackerSploit', language: 'English', category: 'Privilege Escalation' },
  { id: 'uTcrbNBVPNQ', title: 'SUID Privilege Escalation', channel: 'John Hammond', language: 'English', category: 'Privilege Escalation' },
  { id: 'K9DKULRryyU', title: 'Kernel Exploits Tutorial', channel: 'LiveOverflow', language: 'English', category: 'Privilege Escalation' },
  { id: 'wQNr6wMJ2Lo', title: 'Windows Privilege Escalation', channel: 'IppSec', language: 'English', category: 'Privilege Escalation' },
  // Hindi
  { id: 'n9TwCkLvqb0', title: 'Privilege Escalation Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Privilege Escalation' },
  { id: 'KcYrLi8a0rM', title: 'Linux PrivEsc Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Privilege Escalation' },

  // === NETWORK ATTACKS ===
  // English
  { id: '-rSqbgI7oZM', title: 'Man in the Middle Attack', channel: 'NetworkChuck', language: 'English', category: 'Network Attacks' },
  { id: '0GGo4nJLs0Q', title: 'ARP Spoofing Tutorial', channel: 'David Bombal', language: 'English', category: 'Network Attacks' },
  { id: 'AYqFuOLCZk8', title: 'DNS Spoofing Attack', channel: 'HackerSploit', language: 'English', category: 'Network Attacks' },
  { id: 'gVBUpZ2LPGA', title: 'Network Sniffing Wireshark', channel: 'The Cyber Mentor', language: 'English', category: 'Network Attacks' },
  { id: 'tSVgqglwhUI', title: 'MITM Attack Complete', channel: 'John Hammond', language: 'English', category: 'Network Attacks' },
  // Hindi
  { id: 'bA4wQz-m0wI', title: 'MITM Attack Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Network Attacks' },
  { id: 'O9rUMhWiQBk', title: 'ARP Spoofing Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Network Attacks' },

  // === VULNERABILITY SCANNING ===
  // English
  { id: 'CPKxCAB_R44', title: 'Nessus Tutorial Complete', channel: 'HackerSploit', language: 'English', category: 'Vulnerability Scanning' },
  { id: 'p4JgIu1mceI', title: 'Nikto Web Scanner Tutorial', channel: 'The Cyber Mentor', language: 'English', category: 'Vulnerability Scanning' },
  { id: 'Nlyko7y9Xrk', title: 'WPScan WordPress Scanner', channel: 'John Hammond', language: 'English', category: 'Vulnerability Scanning' },
  { id: 'P2F4i5jLozg', title: 'OpenVAS Setup Guide', channel: 'David Bombal', language: 'English', category: 'Vulnerability Scanning' },
  // Hindi
  { id: 'UO_IlEgdBGE', title: 'Vulnerability Scanning Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Vulnerability Scanning' },
  { id: 'HXME_n0d-aw', title: 'Nessus Tutorial Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Vulnerability Scanning' },

  // === REVERSE ENGINEERING ===
  // English
  { id: 'fTGTnrgjuGA', title: 'Reverse Engineering Basics', channel: 'LiveOverflow', language: 'English', category: 'Reverse Engineering' },
  { id: 'gh2RXE9BIN8', title: 'Ghidra Tutorial Beginners', channel: 'John Hammond', language: 'English', category: 'Reverse Engineering' },
  { id: '75gBFiFtAb8', title: 'Binary Exploitation', channel: 'LiveOverflow', language: 'English', category: 'Reverse Engineering' },
  { id: 'WnqOhgI_8wA', title: 'Assembly for Hackers', channel: 'The Cyber Mentor', language: 'English', category: 'Reverse Engineering' },
  // Hindi
  { id: 'z7r3n_VRW_4', title: 'Reverse Engineering Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Reverse Engineering' },

  // === MALWARE ANALYSIS ===
  // English
  { id: '20xXGjGMgqM', title: 'Malware Analysis Fundamentals', channel: 'The Cyber Mentor', language: 'English', category: 'Malware Analysis' },
  { id: 'BCdKu0dbJsk', title: 'Creating a Malware Lab', channel: 'HackerSploit', language: 'English', category: 'Malware Analysis' },
  { id: 'qA0YcYMRWyI', title: 'Dynamic Malware Analysis', channel: 'LiveOverflow', language: 'English', category: 'Malware Analysis' },
  { id: 'guXoWBAH2lo', title: 'Malware Reverse Engineering', channel: 'John Hammond', language: 'English', category: 'Malware Analysis' },
  // Hindi
  { id: '7EjZVCXk3zs', title: 'Malware Analysis Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Malware Analysis' },

  // === CTF & PRACTICE ===
  // English
  { id: 'Lqehvpe_djs', title: 'How to Start CTF', channel: 'John Hammond', language: 'English', category: 'CTF & Practice' },
  { id: 'xl2Xx5YOKcI', title: 'TryHackMe Complete Guide', channel: 'NetworkChuck', language: 'English', category: 'CTF & Practice' },
  { id: 'fqMOX6JJhGo', title: 'HackTheBox Walkthrough', channel: 'IppSec', language: 'English', category: 'CTF & Practice' },
  { id: '2TofunAI6fU', title: 'OverTheWire Bandit', channel: 'HackerSploit', language: 'English', category: 'CTF & Practice' },
  { id: 'RqoL_RrpgWQ', title: 'CTF for Beginners', channel: 'The Cyber Mentor', language: 'English', category: 'CTF & Practice' },
  // Hindi
  { id: 'oZ-bVDILg2U', title: 'CTF Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'CTF & Practice' },
  { id: 'B0mHzJzdJo0', title: 'TryHackMe Hindi Guide', channel: 'Ankit Chauhan', language: 'Hindi', category: 'CTF & Practice' },

  // === WEB APPLICATION SECURITY ===
  // English
  { id: 'X4eRbHgRawI', title: 'Web App Pentesting', channel: 'The Cyber Mentor', language: 'English', category: 'Web App Security' },
  { id: 'qo_xJOtdHK4', title: 'OWASP Top 10 Explained', channel: 'HackerSploit', language: 'English', category: 'Web App Security' },
  { id: 'mr64iofFmyk', title: 'Directory Bruteforcing Gobuster', channel: 'John Hammond', language: 'English', category: 'Web App Security' },
  { id: '2_lswM1S264', title: 'Subdomain Enumeration', channel: 'Nahamsec', language: 'English', category: 'Web App Security' },
  { id: 'W4_aAg_7STw', title: 'Web Hacking Complete', channel: 'Rana Khalil', language: 'English', category: 'Web App Security' },
  // Hindi
  { id: 'Ni4U0-17MoU', title: 'Web Hacking Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Web App Security' },
  { id: 'pvM_qc3oWxY', title: 'OWASP Top 10 Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Web App Security' },

  // === ANONYMITY & PRIVACY ===
  // English
  { id: 'CgCgrLlDVwU', title: 'Tor Network Explained', channel: 'NetworkChuck', language: 'English', category: 'Anonymity & Privacy' },
  { id: 'XaKRF7fJBfg', title: 'ProxyChains Tutorial', channel: 'HackerSploit', language: 'English', category: 'Anonymity & Privacy' },
  { id: 'mYmamECDMps', title: 'VPN vs Tor for Privacy', channel: 'David Bombal', language: 'English', category: 'Anonymity & Privacy' },
  { id: 'mljE5YijyEI', title: 'Anonymous Hacking Setup', channel: 'The Cyber Mentor', language: 'English', category: 'Anonymity & Privacy' },
  // Hindi
  { id: 'fBNVvlvMj_k', title: 'Anonymity Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Anonymity & Privacy' },
  { id: 'dCFng9Eh-P4', title: 'Tor Browser Hindi Guide', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Anonymity & Privacy' },

  // === SCRIPTING ===
  // English
  { id: 'SPwyp2NG-bE', title: 'Bash Scripting for Hackers', channel: 'NetworkChuck', language: 'English', category: 'Scripting' },
  { id: 'oxuRxtrO2Ag', title: 'Linux Command Line Mastery', channel: 'The Cyber Mentor', language: 'English', category: 'Scripting' },
  { id: 'smbeKPDVs2I', title: 'Python for Penetration Testing', channel: 'David Bombal', language: 'English', category: 'Scripting' },
  { id: 'kD0hsz0Sv2E', title: 'Python Hacking Scripts', channel: 'HackerSploit', language: 'English', category: 'Scripting' },
  // Hindi
  { id: 'gfDE2a7MKjA', title: 'Bash Scripting Hindi', channel: 'CodeWithHarry', language: 'Hindi', category: 'Scripting' },
  { id: 'oAyFE2KvA7U', title: 'Python Hacking Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Scripting' },

  // === ACTIVE DIRECTORY ===
  // English
  { id: 'VXxH4n684HE', title: 'Active Directory Hacking', channel: 'The Cyber Mentor', language: 'English', category: 'Active Directory' },
  { id: 'pKtDQtsubio', title: 'AD Pentesting Complete', channel: 'HackerSploit', language: 'English', category: 'Active Directory' },
  { id: 'qeqnZSaQ9Cw', title: 'Kerberoasting Attack', channel: 'John Hammond', language: 'English', category: 'Active Directory' },
  { id: 'wP9_JBB-NB4', title: 'BloodHound Tutorial', channel: 'IppSec', language: 'English', category: 'Active Directory' },
  // Hindi
  { id: 'n3CqE0cJr48', title: 'Active Directory Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Active Directory' },

  // === WIRESHARK ANALYSIS ===
  // English
  { id: 'TkCSr30UojM', title: 'Wireshark Tutorial Beginners', channel: 'NetworkChuck', language: 'English', category: 'Wireshark' },
  { id: 'r0l_54thSYU', title: 'Wireshark Packet Analysis', channel: 'David Bombal', language: 'English', category: 'Wireshark' },
  { id: 'cjKj7OgtGBI', title: 'Wireshark for Hackers', channel: 'HackerSploit', language: 'English', category: 'Wireshark' },
  { id: 'OU-A2EmVrKQ', title: 'Network Traffic Analysis', channel: 'The Cyber Mentor', language: 'English', category: 'Wireshark' },
  // Hindi
  { id: 'YvQPaBnX9hY', title: 'Wireshark Tutorial Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Wireshark' },
  { id: 'LZkbD22Uq_M', title: 'Packet Analysis Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Wireshark' },

  // === BUG BOUNTY ===
  // English
  { id: 'LrLJoe-2C60', title: 'Bug Bounty Hunting Guide', channel: 'Nahamsec', language: 'English', category: 'Bug Bounty' },
  { id: 'DcnLEq2zRLA', title: 'Bug Bounty Methodology', channel: 'InsiderPhD', language: 'English', category: 'Bug Bounty' },
  { id: 'YhUiSfTBKAo', title: 'Recon for Bug Bounty', channel: 'Nahamsec', language: 'English', category: 'Bug Bounty' },
  { id: 'jq1ZYZvazlM', title: 'Bug Bounty Tips', channel: 'STÖK', language: 'English', category: 'Bug Bounty' },
  // Hindi
  { id: 'cO1dVCz_o2Y', title: 'Bug Bounty Hindi Guide', channel: 'Technical Sagar', language: 'Hindi', category: 'Bug Bounty' },
  { id: 'nP4kDfxVJE0', title: 'Bug Bounty Hunting Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Bug Bounty' },

  // === OSINT ===
  // English
  { id: 'U3Qd9iQv1tQ', title: 'OSINT Fundamentals', channel: 'The Cyber Mentor', language: 'English', category: 'OSINT' },
  { id: 'ImWJgDQ3_WM', title: 'OSINT Tools Guide', channel: 'David Bombal', language: 'English', category: 'OSINT' },
  { id: 'qwA6MmbeGNo', title: 'Information Gathering', channel: 'HackerSploit', language: 'English', category: 'OSINT' },
  { id: 'zMN3C-6bQ2g', title: 'OSINT Investigation', channel: 'NetworkChuck', language: 'English', category: 'OSINT' },
  // Hindi
  { id: 'Z4GpPqLLy7M', title: 'OSINT Hindi Tutorial', channel: 'Technical Sagar', language: 'Hindi', category: 'OSINT' },

  // === MOBILE HACKING ===
  // English
  { id: 'wR-HSJP8kWs', title: 'Android Hacking Tutorial', channel: 'The Cyber Mentor', language: 'English', category: 'Mobile Hacking' },
  { id: 'dSZR8kLaYFs', title: 'Mobile Pentesting Guide', channel: 'HackerSploit', language: 'English', category: 'Mobile Hacking' },
  { id: '9F1JfMjMDnM', title: 'Android App Security', channel: 'John Hammond', language: 'English', category: 'Mobile Hacking' },
  { id: 'I0yQDLTdI2I', title: 'Mobile Security Testing', channel: 'David Bombal', language: 'English', category: 'Mobile Hacking' },
  // Hindi
  { id: 'MbMWvPb7UxI', title: 'Mobile Hacking Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Mobile Hacking' },
  { id: 'nQe0eCtDLZY', title: 'Android Hacking Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Mobile Hacking' },

  // === CRYPTOGRAPHY ===
  // English
  { id: '4Kxre9vfHHs', title: 'Encryption Explained', channel: 'NetworkChuck', language: 'English', category: 'Cryptography' },
  { id: 'NuyzuNBFWxQ', title: 'Crypto Attacks Tutorial', channel: 'LiveOverflow', language: 'English', category: 'Cryptography' },
  { id: 'n_qL7J-4iMw', title: 'Cryptography for Hackers', channel: 'The Cyber Mentor', language: 'English', category: 'Cryptography' },
  { id: 'M6B13B7q0gs', title: 'Hash Functions Explained', channel: 'HackerSploit', language: 'English', category: 'Cryptography' },
  // Hindi
  { id: 'jhXCTbFnK8o', title: 'Cryptography Hindi', channel: 'CodeWithHarry', language: 'Hindi', category: 'Cryptography' },
  { id: 'XH3n_a_-rBI', title: 'Encryption Basics Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Cryptography' },

  // === FORENSICS ===
  // English
  { id: 'W8DAhIiDqYc', title: 'Digital Forensics Basics', channel: 'The Cyber Mentor', language: 'English', category: 'Forensics' },
  { id: 'CxY3RQqnnLU', title: 'Memory Forensics Tutorial', channel: 'John Hammond', language: 'English', category: 'Forensics' },
  { id: 'T0w9vp_IBMM', title: 'Forensics Investigation', channel: 'HackerSploit', language: 'English', category: 'Forensics' },
  { id: 'OLCL6OYbSTw', title: 'Autopsy Tutorial', channel: 'David Bombal', language: 'English', category: 'Forensics' },
  // Hindi
  { id: 'ij8C_zN8O58', title: 'Digital Forensics Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Forensics' },

  // === CLOUD SECURITY ===
  // English
  { id: 'FZ6tE4s6m4s', title: 'AWS Security Basics', channel: 'The Cyber Mentor', language: 'English', category: 'Cloud Security' },
  { id: 'kIjJQ9X0dWI', title: 'Cloud Pentesting Guide', channel: 'HackerSploit', language: 'English', category: 'Cloud Security' },
  { id: 'ylZmKkOAOz4', title: 'Azure Security Tutorial', channel: 'David Bombal', language: 'English', category: 'Cloud Security' },
  { id: 'cZ98H_V-dDY', title: 'Cloud Security Fundamentals', channel: 'NetworkChuck', language: 'English', category: 'Cloud Security' },
  // Hindi
  { id: 'AT3C2lLm9HM', title: 'Cloud Security Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Cloud Security' },

  // === DOCKER & CONTAINER SECURITY ===
  // English
  { id: 'cPGZMt4cJ0I', title: 'Docker Security Guide', channel: 'NetworkChuck', language: 'English', category: 'Docker Security' },
  { id: 'YNyqJnpGmas', title: 'Container Hacking Tutorial', channel: 'The Cyber Mentor', language: 'English', category: 'Docker Security' },
  { id: 'JF5gH0I4DsI', title: 'Docker Escape Techniques', channel: 'HackerSploit', language: 'English', category: 'Docker Security' },
  { id: 'HBvX9jhzZ9g', title: 'Kubernetes Security', channel: 'David Bombal', language: 'English', category: 'Docker Security' },
  // Hindi
  { id: 'w4v8_-dKvUY', title: 'Docker Security Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Docker Security' },

  // === AI & CYBERSECURITY (NEW 2025) ===
  // English
  { id: 'qMKKEp7CIN0', title: 'AI for Hacking - ChatGPT Prompts', channel: 'David Bombal', language: 'English', category: 'AI & Cybersecurity' },
  { id: 'jkSMPL5CPnA', title: 'AI Powered Pentesting 2025', channel: 'NetworkChuck', language: 'English', category: 'AI & Cybersecurity' },
  { id: 'aJ2sp7KMTPE', title: 'Using AI for Bug Bounty', channel: 'Nahamsec', language: 'English', category: 'AI & Cybersecurity' },
  { id: 'ZuJAbxsJl-Y', title: 'LLM Security & Prompt Injection', channel: 'John Hammond', language: 'English', category: 'AI & Cybersecurity' },

  // === RED TEAM OPERATIONS (NEW) ===
  // English
  { id: 'HHJWfG9b0-E', title: 'Red Team Operations Full Course', channel: 'The Cyber Mentor', language: 'English', category: 'Red Teaming' },
  { id: 'rlvPvm2RfAg', title: 'Cobalt Strike Tutorial', channel: 'HackerSploit', language: 'English', category: 'Red Teaming' },
  { id: 'OGhSdnuHj9Q', title: 'Red Team vs Blue Team', channel: 'David Bombal', language: 'English', category: 'Red Teaming' },
  { id: 'Rp7qqjLGi_U', title: 'C2 Framework Setup', channel: 'John Hammond', language: 'English', category: 'Red Teaming' },

  // === FULL COURSES ===
  // English
  { id: '3Kq1MIfTWCE', title: 'Complete Ethical Hacking', channel: 'The Cyber Mentor', language: 'English', category: 'Full Courses' },
  { id: 'fNzpcB7ODxQ', title: 'Ethical Hacking Full Course', channel: 'NetworkChuck', language: 'English', category: 'Full Courses' },
  { id: 'lZAoFs75_cs', title: 'Hacking into Your First Machine', channel: 'NetworkChuck', language: 'English', category: 'Full Courses' },
  { id: '8lR27r8Y_ik', title: 'Kali Linux Full Course', channel: 'HackerSploit', language: 'English', category: 'Full Courses' },
  { id: 'WnN6dbos5u8', title: 'Ethical Hacking 12 Hours', channel: 'freeCodeCamp', language: 'English', category: 'Full Courses' },
  // Hindi
  { id: 'hTB0Fy67JVk', title: 'Ethical Hacking Full Hindi', channel: 'Ankit Chauhan', language: 'Hindi', category: 'Full Courses' },
  { id: 'USqVD3S36X0', title: 'Hacking Course Hindi', channel: 'CodeWithHarry', language: 'Hindi', category: 'Full Courses' },
  { id: 'g_N2QvAcuPE', title: 'Complete Hacking Hindi', channel: 'Technical Sagar', language: 'Hindi', category: 'Full Courses' },
];

export const categories = [
  'Kali Linux Basics',
  'Nmap Scanning',
  'Metasploit',
  'Burp Suite',
  'WiFi Hacking',
  'SQL Injection',
  'XSS Attacks',
  'Password Cracking',
  'Social Engineering',
  'Privilege Escalation',
  'Network Attacks',
  'Vulnerability Scanning',
  'Reverse Engineering',
  'Malware Analysis',
  'CTF & Practice',
  'Web App Security',
  'Anonymity & Privacy',
  'Scripting',
  'Active Directory',
  'Wireshark',
  'Bug Bounty',
  'OSINT',
  'Mobile Hacking',
  'Cryptography',
  'Forensics',
  'Cloud Security',
  'Docker Security',
  'AI & Cybersecurity',
  'Red Teaming',
  'Full Courses',
];
