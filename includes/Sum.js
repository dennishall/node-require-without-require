function Sum () {
    return [...arguments].reduce((sum, value) => (
        (sum + value)
    ), 0);
}
