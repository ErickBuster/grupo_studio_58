# ! es igual not 
# || es igual or
# && es igual and

opcion = "+" # la opcion que teclea el usuario
numero = 10 # valor 1 que ingreso el usuario
numero_dos = 5 # valor 2 que ingreso el usuario

resultado = 0  # resultado que le muestras al usuario de la operacion


"""
Opcion 1 utilizando funciones y condicionales 
 """
def esUnNumero(numero):
    return isinstance(numero, int) # true = si es un numero

def validarNumeros(a, b):
    if (not esUnNumero(a) or not esUnNumero(b)):
        print("Coloca un numero porfavor")
        return True
    return False

def sumar(a, b):
    if validarNumeros(a, b): 
        return 0
    return a + b

def restar(a, b):
    if validarNumeros(a, b):
        return 0
    return a - b
def multiplicar(a, b):
    if validarNumeros(a, b):
        return 0
    return a * b
def dividir(a, b):
    if validarNumeros(a, b):
        return 0
    return a / b
def potencia(a, b):
    if validarNumeros(a, b):
        return 0
    return a ** b

if(opcion == "+"):
    resultado = sumar(numero, numero_dos)
elif(opcion == "-"): # else if en JS
    resultado = restar(numero, numero_dos)
elif(opcion == "*"):
    resultado = multiplicar(numero, numero_dos)
elif(opcion == "/"):
    resultado = dividir(numero, numero_dos)
elif(opcion == "**"):
    resultado = potencia(numero, numero_dos)
else:
    print("opcion invalida")
    exit

print(resultado)



""" Opcion 2
Utilizando clases y diccionario (en JS es un objecto)
 """
class Calculador:
    def __init__(self, uno, dos): # constructor
        self.numero = uno
        self.numerito = dos

    def esUnNumero(numero):
        return isinstance(numero, int) # true = si es un numero

    def validarNumeros(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            print("Coloca un numero porfavor")
            return True
        return False

    def sumar(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            return 0
        return self.numero + self.numerito

    def restar(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            return 0
        return self.numero - self.numerito
    def multiplicar(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            return 0
        return self.numero * self.numerito
    def dividir(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            return 0
        return self.numero / self.numerito
    def potencia(self):
        if (not esUnNumero(self.numero) or not esUnNumero(self.numerito)):
            return 0
        return self.numero ** self.numerito

opcion = "*"
calculadora = Calculador(numero, numero_dos)
operaciones = {
    "+": calculadora.sumar,
    "-": calculadora.restar,
    "*": calculadora.multiplicar,
    "/": calculadora.dividir,
    "**": calculadora.potencia,
}

# print(operaciones["+"]())
resultado = operaciones[opcion]()
print(resultado)

