x = int(input())

def arenda_mashin(days):
    arenda = days * 50
    return print(((arenda*100)-(arenda*10))/100,'10%') if days >= 3 and days < 7 else print(arenda), print(((arenda*100)-(arenda*30))/100,'30%') if days >= 7 else print(arenda)

arenda_mashin(x)