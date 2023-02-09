Feature: Hear shout
    Scenario: Lsterner is within range
        Given Lucy is located 15 metres from Sean
        When Sean shouts "free begels at Sean's"
        Then lucy hears Sean's message