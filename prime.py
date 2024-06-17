def prime(n):    # Add an indented block of code here
    if n < 2:
        return False                        # 2 is the smallest prime number
        for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
        return True