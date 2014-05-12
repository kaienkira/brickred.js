MAKE = make --no-print-directory

define ECHO
	@printf "\033[;31m"; printf $1; printf "\033[0m\n"
endef

debug release clean profile:
	@$(call ECHO, "[build brickred.js]")
	@$(MAKE) -f mak/brickred.js.mak $@

