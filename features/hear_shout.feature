Feature: Hear shout
    Scenario: Lsterner is within range
        Given Lucy is located 15 metres from Scena
        When Sean shouts "free begels at sean's"
        Then lucy hears Sean's message