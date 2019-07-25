### 题材

求出 excel 列对应的 title

### 思路

1 -- A
28 -- AB

这相当于是 26 进制，和回文数那种数字反转的思路类似

    xReverse = 0
    xReverse = x % 10 + xReverse * 10
    x = Math.floor(x / 10)

我们需要转换成 26 进制，在加上基数 `'A'.charCodeAt()` （64）

    if x > 0 就一直进位求值
    code = ''
    code = (x - 1) % 26 + 'A'.charCodeAt() // 等于上面的 xReverse * 10
    x = Math((x - 1) / 10)
    String.fromCharCodeAt(code)
    result = code + result // 等于上面的 x % 10 + xReverse * 10

### 问题
没有招到和回文数的类比 XD