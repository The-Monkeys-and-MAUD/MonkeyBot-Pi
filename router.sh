#!/usr/bin/env bash
# tail the fnotify file but load 0 lines on
# startup. The tail will only kick in when
# a new line is added after the router script
# is started
tail -F -n 0 ~/.irssi/fnotify | while read heading message; do \
	echo ${message}; \
	sh ~/MonkeyBot-Pi/Blinky/blink.sh
done
