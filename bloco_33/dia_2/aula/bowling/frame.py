from enum import Enum
from random import randint


class Frame:
    PINS = 10

    def __init__(self):
        self.first_roll = 0
        self.second_roll = 0
        self.type = FrameTypes.UNPLAYED

    def play(self):
        self.first_roll = self._roll()
        pins_left = self.PINS - self.first_roll
        self.second_roll = self._roll(pins_left) if self.first_roll < 10 else 0
        self.__check_type()

    @classmethod
    def _roll(cls, pins_left=PINS):
        return randint(0, pins_left)

    def pins(self):
        return self.first_roll + self.second_roll

    def __check_type(self):
        if self.first_roll == self.PINS:
            self.type = FrameTypes.STRIKE
        elif self.pins() == self.PINS:
            self.type = FrameTypes.SPARE
        else:
            self.type = FrameTypes.REGULAR


class TenthFrame(Frame):
    def __init__(self):
        super().__init__()
        self.third_roll = 0

    def pins(self):
        return super().pins() + self.third_roll

    def play(self):
        super().play()

        if self.type == FrameTypes.SPARE:
            self.third_roll = self._roll()
        elif self.type == FrameTypes.STRIKE:
            self.second_roll = self._roll()
            pins_left = self.PINS - self.second_roll
            self.third_roll = (
                self._roll(pins_left) if self.second_roll < 10 else 0
            )


class FrameTypes(Enum):
    UNPLAYED = 0
    REGULAR = 1
    SPARE = 2
    STRIKE = 3
