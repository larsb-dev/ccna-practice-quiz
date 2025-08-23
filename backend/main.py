from fastapi import FastAPI, Path, Query, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from starlette import status
from Question import Question

app = FastAPI()

origins = [
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

questions = [
    Question(id=0, text="Which OSI layer handles logical addressing and routing?", options=["Data Link", "Network", "Transport", "Session"], answer="Network"),
    Question(id=1, text="What is the default administrative distance of a static route?", options=["0", "1", "90", "110"], answer="1"),
    Question(id=2, text="Which protocol is used to discover the MAC address associated with an IPv4 address?", options=["DNS", "ICMP", "ARP", "RARP"], answer="ARP"),
    Question(id=3, text="What is the primary purpose of VLANs?", options=["Increase bandwidth", "Reduce broadcast domains", "Encrypt traffic", "Assign IP addresses"], answer="Reduce broadcast domains"),
    Question(id=4, text="Which command shows the routing table on a Cisco router?", options=["show interfaces", "show ip route", "show ip protocols", "show arp"], answer="show ip route"),
    Question(id=5, text="Which WAN technology uses labels to make forwarding decisions?", options=["MPLS", "Frame Relay", "ATM", "ISDN"], answer="MPLS"),
    Question(id=6, text="What is the private IP range for Class C?", options=["10.0.0.0/8", "172.16.0.0/12", "192.168.0.0/16", "169.254.0.0/16"], answer="192.168.0.0/16"),
    Question(id=7, text="Which protocol provides loop-free topology in a switched network?", options=["VTP", "STP", "CDP", "LLDP"], answer="STP"),
    Question(id=8, text="Which IPv6 address type is equivalent to IPv4 public addresses?", options=["Link-local", "Unique local", "Multicast", "Global unicast"], answer="Global unicast"),
    Question(id=9, text="Which command enables OSPF process 1 on all interfaces in 10.0.0.0/8?", options=["router ospf 1\n network 10.0.0.0 0.0.0.255 area 0", "router ospf 1\n network 10.0.0.0 0.255.255.255 area 0", "router ospf 1\n network 10.0.0.0 255.0.0.0 area 0", "router ospf 1\n network 10.0.0.0 0.255.255.255 area 1"], answer="router ospf 1\n network 10.0.0.0 0.255.255.255 area 0"),
]

@app.get("/questions", status_code=status.HTTP_200_OK)
async def get_questions():
    return questions

@app.get("/questions/{id}", status_code=status.HTTP_200_OK)
async def get_question(id: int = Path(ge=0, lt=len(questions))):
    for question in questions:
        if question.id == id:
            return question
    raise HTTPException(status_code=404, detail="Item not found")