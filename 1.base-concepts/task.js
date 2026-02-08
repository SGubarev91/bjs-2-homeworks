"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  // вычисляем дискриминант:
  const discriminant = b ** 2 - 4 * a * c;
  // вычисляем значения корней уравнения:
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    arr.push(root);
  } else {
    const sqrtDiscriminant = Math.sqrt(discriminant);
    const root1 = (-b + sqrtDiscriminant) / (2 * a);
    const root2 = (-b - sqrtDiscriminant) / (2 * a);
    arr.push(root1, root2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Преобразуем все аргументы в числа
    const percentNum = Number(percent); // процентная ставка
    const contributionNum = Number(contribution); // первоначальный взнос
    const amountNum = Number(amount); // сумма кредита
    const countMonthsNum = Number(countMonths); // срок кредитования

    // Проверяем, что все преобразования прошли успешно и значения корректны
    if (
        isNaN(percentNum) ||
        isNaN(contributionNum) ||
        isNaN(amountNum) ||
        isNaN(countMonthsNum)
    ) {
        return false;
    }

    // Преобразуем годовую процентную ставку из % в долю и затем в месячную
    const monthlyRate = (percentNum / 100) / 12;

    // Вычисляем тело кредита (сумму, которую нужно вернуть банку)
    const loanBody = amountNum - contributionNum;

    // Если тело кредита равно нулю или отрицательное, клиент ничего не должен
    if (loanBody <= 0) {
        return 0;
    }

    // Рассчитываем ежемесячный платёж по формуле
    const monthlyPayment = loanBody * (monthlyRate + (monthlyRate / (Math.pow((1 + monthlyRate), countMonthsNum) - 1)));

    // Общая сумма выплат
    const totalPayment = monthlyPayment * countMonthsNum;

    // возвращаем число c округлением результата до двух знаков после запятой
    return parseFloat(totalPayment.toFixed(2));
}