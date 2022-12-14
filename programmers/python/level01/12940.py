# 최대공약수와 최소공배수
def solution(n, m):
    answer = []

    def gcd(n, m):
        r = n % m
        if r == 0:
            return m
        else:
            return gcd(m, r)

    answer.append(gcd(n, m))
    answer.append(n * m / gcd(n, m))

    return answer