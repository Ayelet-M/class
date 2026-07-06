def calculate_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"


def main():
    try:
        score = float(input("Enter the numeric score: "))
    except ValueError:
        print("Please enter a valid number.")
        return

    if not 0 <= score <= 100:
        print("Please enter a score between 0 and 100.")
        return

    grade = calculate_grade(score)
    print(f"Score: {score}")
    print(f"Grade: {grade}")


if __name__ == "__main__":
    main()
