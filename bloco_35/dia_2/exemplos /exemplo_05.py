def sum_prior_numbers(n):
    if n == 0:
        return 0
    else:
        print(n)
        return n + sum_prior_numbers(n - 1)


print(sum_prior_numbers(10))
