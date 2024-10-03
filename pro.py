number1 = float(input('Type the first number: '))
number2 = float(input('Type the second number: '))
Sign = input('Sign: ')

def format_result(result):
    return int(result) if result.is_integer() else result
try:
    if Sign == '+':
        result = number1 + number2
        print(format_result(result=result))
    
    elif Sign == '-':
        result = number1 - number2
        print(format_result(result=result))
        
    elif Sign == '*':
        result = number1 * number2
        print(format_result(result=result))
        
    elif Sign == '/':
        try:
            result = number1 / number2
            print(format_result(result=result))
            
        except ZeroDivisionError:
            print('Error: Division by zero is not allowed.')
              
    else:
        print('An error ocurred, make sure you input the correct values')
        
except ValueError:
    print('Error: input valid numbers')