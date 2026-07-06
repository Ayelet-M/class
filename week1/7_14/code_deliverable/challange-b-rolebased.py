"""Grade calculator for converting numeric scores into letter grades."""


def determine_letter_grade(score: float) -> str:
    """Return the letter grade for a given numeric score.

    Args:
        score: A numeric value between 0 and 100.

    Returns:
        A letter grade as a string.
    """
    if score >= 90:
        return "A"
    if score >= 80:
        return "B"
    if score >= 70:
        return "C"
    if score >= 60:
        return "D"
    return "F"


def get_valid_score() -> float:
    """Prompt the user for a score and return a validated numeric value."""
    while True:
        raw_input = input("Enter the numeric score (0-100): ")
        try:
            score = float(raw_input)
        except ValueError:
            print("Error: Please enter a numeric value.")
            continue

        if 0 <= score <= 100:
            return score

        print("Error: Score must be between 0 and 100.")


def main() -> None:
    """Run the grade calculator interactively."""
    score = get_valid_score()
    grade = determine_letter_grade(score)
    print(f"Score: {score}")
    print(f"Letter Grade: {grade}")


if __name__ == "__main__":
    main()
