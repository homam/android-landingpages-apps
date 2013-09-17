var	vi_started = false;
	vi_score = 0,
	vi_state = 0,
	vi_handler = {
		getScores: function() { return vi_score },
		stop: function() { vi_state |= 1 },
		restart: function() { vi_state |= 2 },
		unload: function() { vi_state |= 4 },
	};
function vi_init() { if (vi_started) return; window._vi.game_load(vi_handler); vi_started = true }
function vi_game_start() { window._vi.game_start() }
function vi_game_end() { window._vi.game_end() }
function vi_game_quit() { window._vi.game_quit() }
function vi_level_start() { window._vi.level_start() }
function vi_level_end() { window._vi.level_end() }
function vi_set_score(value) { vi_score = value }
function vi_get_state() { var o = vi_state; vi_state = 0; return o }