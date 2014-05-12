define ECHO
    @printf "\033[;32m"; printf $1; printf "\033[0m\n"
endef

debug:
	@$(call ECHO, "[building debug $(TARGET) ...]")
	@cat $(SRCS) >$(TARGET)

release:
	@$(call ECHO, "[building release $(TARGET) ...]")
	@java -jar compiler/compiler.jar \
          --js $(SRCS) --js_output_file $(TARGET) \
          --compilation_level SIMPLE_OPTIMIZATIONS

clean:
	@$(call ECHO, "[cleaning $(TARGET) ...]")
	@rm -f $(TARGET)
