/**
 * @struct
 * @type {object}
 */
var MafiosoApi = {
  /**
   * Успешное выполнение запроса
   * @constructor
   * @struct
   * @return {MafiosoApi.Ok}
   */
  Ok:function(){
    return this;
  },
  ParseJsonOk:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.Ok(
    );
  },
  /**
   * Безуспешное выполнение запроса
   * @constructor
   * @struct
   * @param {number} code Код ошибки
   * @param {string} reason Причина ошибки
   * @return {MafiosoApi.Error}
   */
  Error:function(code, reason){
    this.code = code;
    this.reason = reason;
    return this;
  },
  ParseJsonError:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.Error(
      typeof(data.code) === 'number' ? data.code : null,
      typeof(data.reason) === 'string' ? data.reason : null
    );
  },
  /**
   * Эмоджи
   * @constructor
   * @struct
   * @param {string} emoji Обязательно   | Стандартный эмоджи
   * @param {number} custom_emoji_id Необязательно | Премиум эмоджи
   * @return {MafiosoApi.Emoji}
   */
  Emoji:function(emoji, custom_emoji_id){
    this.emoji = emoji;
    this.custom_emoji_id = custom_emoji_id;
    return this;
  },
  ParseJsonEmoji:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.Emoji(
      typeof(data.emoji) === 'string' ? data.emoji : null,
      typeof(data.custom_emoji_id) === 'number' ? data.custom_emoji_id : null
    );
  },
  /**
   * Фракция мирной роли
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleFractonPeace}
   */
  RoleFractonPeace:function(){
    return this;
  },
  ParseJsonRoleFractonPeace:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleFractonPeace(
    );
  },
  /**
   * Фракция мафии
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleFractonMafia}
   */
  RoleFractonMafia:function(){
    return this;
  },
  ParseJsonRoleFractonMafia:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleFractonMafia(
    );
  },
  /**
   * Фракция нейтральной роли
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleFractonNeutral}
   */
  RoleFractonNeutral:function(){
    return this;
  },
  ParseJsonRoleFractonNeutral:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleFractonNeutral(
    );
  },
  /**
   * Фракция убийцы
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleFractonKiller}
   */
  RoleFractonKiller:function(){
    return this;
  },
  ParseJsonRoleFractonKiller:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleFractonKiller(
    );
  },
  /**
   * Действие роли - убить
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleActionTypeKill}
   */
  RoleActionTypeKill:function(){
    return this;
  },
  ParseJsonRoleActionTypeKill:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionTypeKill(
    );
  },
  /**
   * Действие роли - Вылечить
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleActionTypeHealing}
   */
  RoleActionTypeHealing:function(){
    return this;
  },
  ParseJsonRoleActionTypeHealing:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionTypeHealing(
    );
  },
  /**
   * Действие роли - Заморозить ход
   * @constructor
   * @struct
   * @param {boolean} is_force Необязательно | Полная заморозка хода
   * @return {MafiosoApi.RoleActionTypeFreeze}
   */
  RoleActionTypeFreeze:function(is_force){
    this.is_force = is_force;
    return this;
  },
  ParseJsonRoleActionTypeFreeze:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionTypeFreeze(
      typeof(data.is_force) === 'boolean' ? data.is_force : null
    );
  },
  /**
   * Действие роли - Пустой ход
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleActionTypeEmpty}
   */
  RoleActionTypeEmpty:function(){
    return this;
  },
  ParseJsonRoleActionTypeEmpty:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionTypeEmpty(
    );
  },
  /**
   * Белый список ролей
   * @constructor
   * @struct
   * @param {?Array<number>} role_ids Необязательно | Список ролей
   * @return {MafiosoApi.RoleListTypeWhiteList}
   */
  RoleListTypeWhiteList:function(role_ids){
    this.role_ids = role_ids;
    return this;
  },
  ParseJsonRoleListTypeWhiteList:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleListTypeWhiteList(
      typeof(data.role_ids) === 'object' && Array.isArray(data.role_ids) ? data.role_ids : null
    );
  },
  /**
   * Чёрный список ролей
   * @constructor
   * @struct
   * @param {?Array<number>} role_ids Необязательно | Список ролей
   * @return {MafiosoApi.RoleListTypeBlackList}
   */
  RoleListTypeBlackList:function(role_ids){
    this.role_ids = role_ids;
    return this;
  },
  ParseJsonRoleListTypeBlackList:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleListTypeBlackList(
      typeof(data.role_ids) === 'object' && Array.isArray(data.role_ids) ? data.role_ids : null
    );
  },
  /**
   * Сменить роль на ID Роли
   * @constructor
   * @struct
   * @param {number} role_id Смена роли на ID роли
   * @return {MafiosoApi.RoleSwitchToRoleId}
   */
  RoleSwitchToRoleId:function(role_id){
    this.role_id = role_id;
    return this;
  },
  ParseJsonRoleSwitchToRoleId:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleSwitchToRoleId(
      typeof(data.role_id) === 'number' ? data.role_id : null
    );
  },
  /**
   * Сменить роль на роль жертвы
   * @constructor
   * @struct
   * @return {MafiosoApi.RoleSwitchToVictimRole}
   */
  RoleSwitchToVictimRole:function(){
    return this;
  },
  ParseJsonRoleSwitchToVictimRole:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleSwitchToVictimRole(
    );
  },
  /**
   * Успешное выполнение действия
   * @constructor
   * @struct
   * @param {?MafiosoApi.RoleSwitch} switch_role Смена роли, NULL если не менять
   * @param {string} msg Текст, который будет отправлен в чат
   * @param {string} msg_victim Текст, который будет отправлен жертве
   * @param {string} msg_actor Текст, который будет отправлен исполнителю
   * @return {MafiosoApi.RoleActionSuccess}
   */
  RoleActionSuccess:function(switch_role, msg, msg_victim, msg_actor){
    this.switch_role = switch_role;
    this.msg = msg;
    this.msg_victim = msg_victim;
    this.msg_actor = msg_actor;
    return this;
  },
  ParseJsonRoleActionSuccess:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionSuccess(
      typeof(data.switch_role) === 'object' ? MafiosoApi.ParseJsonObject(data.switch_role) : null,
      typeof(data.msg) === 'string' ? data.msg : null,
      typeof(data.msg_victim) === 'string' ? data.msg_victim : null,
      typeof(data.msg_actor) === 'string' ? data.msg_actor : null
    );
  },
  /**
   * Безуспешное выполнение действия
   * @constructor
   * @struct
   * @param {string} msg Текст, который будет отправлен в чат
   * @param {string} msg_victim Текст, который будет отправлен жертве
   * @param {string} msg_actor Текст, который будет отправлен исполнителю
   * @return {MafiosoApi.RoleActionFailed}
   */
  RoleActionFailed:function(msg, msg_victim, msg_actor){
    this.msg = msg;
    this.msg_victim = msg_victim;
    this.msg_actor = msg_actor;
    return this;
  },
  ParseJsonRoleActionFailed:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionFailed(
      typeof(data.msg) === 'string' ? data.msg : null,
      typeof(data.msg_victim) === 'string' ? data.msg_victim : null,
      typeof(data.msg_actor) === 'string' ? data.msg_actor : null
    );
  },
  /**
   * Начался процесс выполнения действия
   * @constructor
   * @struct
   * @param {string} msg Текст, который будет отправлен исполнителю с предложением выбрать игрока
   * @param {string} msg_pm Текст, который будет отправлен исполнителю
   * @param {string} msg_chat Текст, который будет отправлен в общий чат
   * @return {MafiosoApi.RoleActionProcess}
   */
  RoleActionProcess:function(msg, msg_pm, msg_chat){
    this.msg = msg;
    this.msg_pm = msg_pm;
    this.msg_chat = msg_chat;
    return this;
  },
  ParseJsonRoleActionProcess:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionProcess(
      typeof(data.msg) === 'string' ? data.msg : null,
      typeof(data.msg_pm) === 'string' ? data.msg_pm : null,
      typeof(data.msg_chat) === 'string' ? data.msg_chat : null
    );
  },
  /**
   * Действие роли
   * @constructor
   * @struct
   * @param {string} name Обязательно   | Название действия
   * @param {?MafiosoApi.RoleActionType} type Необязательно | Тип действия
   * @param {?MafiosoApi.RoleListType} role_allowed Необязательно | Роли, которые могут быть подвержены этому действию
   * @param {?MafiosoApi.RoleListType} role_freeze Необязательно | Роли, которые могут заморозить это действие
   * @param {number} count_victims Необязательно | Количество целей на которые может повлиять это действие
   * @param {number} cooldown Необязательно | Сколько ночей должно пройти чтобы снова выполнить это действие
   * @param {?MafiosoApi.RoleActionProcess} process Обязательно   | Процесс выполнение действия
   * @param {?MafiosoApi.RoleActionSuccess} success Обязательно   | Успешное выполнение действия
   * @param {?MafiosoApi.RoleActionFailed} failed Обязательно   | Безуспешное выполнение действия
   * @return {MafiosoApi.RoleAction}
   */
  RoleAction:function(name, type, role_allowed, role_freeze, count_victims, cooldown, process, success, failed){
    this.name = name;
    this.type = type;
    this.role_allowed = role_allowed;
    this.role_freeze = role_freeze;
    this.count_victims = count_victims;
    this.cooldown = cooldown;
    this.process = process;
    this.success = success;
    this.failed = failed;
    return this;
  },
  ParseJsonRoleAction:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleAction(
      typeof(data.name) === 'string' ? data.name : null,
      typeof(data.type) === 'object' ? MafiosoApi.ParseJsonObject(data.type) : null,
      typeof(data.role_allowed) === 'object' ? MafiosoApi.ParseJsonObject(data.role_allowed) : null,
      typeof(data.role_freeze) === 'object' ? MafiosoApi.ParseJsonObject(data.role_freeze) : null,
      typeof(data.count_victims) === 'number' ? data.count_victims : null,
      typeof(data.cooldown) === 'number' ? data.cooldown : null,
      typeof(data.process) === 'object' ? MafiosoApi.ParseJsonRoleActionProcess(data.process) : null,
      typeof(data.success) === 'object' ? MafiosoApi.ParseJsonRoleActionSuccess(data.success) : null,
      typeof(data.failed) === 'object' ? MafiosoApi.ParseJsonRoleActionFailed(data.failed) : null
    );
  },
  /**
   * Описание действия пропуска роли
   * @constructor
   * @struct
   * @param {string} btn_name Обязательно | Название кнопки с пропуском действия
   * @param {string} message Обязательно | Сообщение, которое будет отправлено в чат после нажатия
   * @return {MafiosoApi.RoleActionSkip}
   */
  RoleActionSkip:function(btn_name, message){
    this.btn_name = btn_name;
    this.message = message;
    return this;
  },
  ParseJsonRoleActionSkip:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleActionSkip(
      typeof(data.btn_name) === 'string' ? data.btn_name : null,
      typeof(data.message) === 'string' ? data.message : null
    );
  },
  /**
   * Структура названия роли
   * @constructor
   * @struct
   * @param {string} name Обязательно | Название роли
   * @param {?MafiosoApi.Emoji} emoji Обязательно | Эмоджи роли
   * @return {MafiosoApi.RoleName}
   */
  RoleName:function(name, emoji){
    this.name = name;
    this.emoji = emoji;
    return this;
  },
  ParseJsonRoleName:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.RoleName(
      typeof(data.name) === 'string' ? data.name : null,
      typeof(data.emoji) === 'object' ? MafiosoApi.ParseJsonEmoji(data.emoji) : null
    );
  },
  /**
   * Структура, описывающая роль
   * @constructor
   * @struct
   * @param {?MafiosoApi.RoleName} name Обязательно   | Название роли
   * @param {string} description Обязательно   | Описание роли
   * @param {?MafiosoApi.RoleFracton} fraction Обязательно   | Фракция роли
   * @param {number} cash_award Необязательно | Количество награды за победу, если 0, то награда выдаётся от Mafioso
   * @param {number} required_players Обязательно   | Требуемое количество игроков для появления роли
   * @param {number} weight_vote Необязательно | Вес голоса на дневном голосовании
   * @param {boolean} revenge_kill Необязательно | Будет ли убита убивающая роль
   * @param {boolean} enabled Необязательно | Активна ли роль
   * @param {string} msg_select_action Обязательно   | Сообщение пользователю, предлагающее выбор действия
   * @param {?MafiosoApi.RoleActionSkip} msg_skip Обязательно   | Сообщение предлагающее пользователю пропустить ход
   * @param {?Array<?MafiosoApi.RoleAction>} actions Необязательно | Действия роли
   * @return {MafiosoApi.Role}
   */
  Role:function(name, description, fraction, cash_award, required_players, weight_vote, revenge_kill, enabled, msg_select_action, msg_skip, actions){
    this.name = name;
    this.description = description;
    this.fraction = fraction;
    this.cash_award = cash_award;
    this.required_players = required_players;
    this.weight_vote = weight_vote;
    this.revenge_kill = revenge_kill;
    this.enabled = enabled;
    this.msg_select_action = msg_select_action;
    this.msg_skip = msg_skip;
    this.actions = actions;
    return this;
  },
  ParseJsonRole:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.Role(
      typeof(data.name) === 'object' ? MafiosoApi.ParseJsonRoleName(data.name) : null,
      typeof(data.description) === 'string' ? data.description : null,
      typeof(data.fraction) === 'object' ? MafiosoApi.ParseJsonObject(data.fraction) : null,
      typeof(data.cash_award) === 'number' ? data.cash_award : null,
      typeof(data.required_players) === 'number' ? data.required_players : null,
      typeof(data.weight_vote) === 'number' ? data.weight_vote : null,
      typeof(data.revenge_kill) === 'boolean' ? data.revenge_kill : null,
      typeof(data.enabled) === 'boolean' ? data.enabled : null,
      typeof(data.msg_select_action) === 'string' ? data.msg_select_action : null,
      typeof(data.msg_skip) === 'object' ? MafiosoApi.ParseJsonRoleActionSkip(data.msg_skip) : null,
      typeof(data.actions) === 'object' && Array.isArray(data.actions) ? data.actions : null
    );
  },
  /**
   * Функция создания новой роли
   * @constructor
   * @struct
   * @param {number} chat_id Обязательно | ID Чата
   * @param {?MafiosoApi.Role} role Обязательно | Данные роли
   * @return {MafiosoApi.AddNewCustomRole}
   */
  AddNewCustomRole:function(chat_id, role){
    this.chat_id = chat_id;
    this.role = role;
    return this;
  },
  ParseJsonAddNewCustomRole:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.AddNewCustomRole(
      typeof(data.chat_id) === 'number' ? data.chat_id : null,
      typeof(data.role) === 'object' ? MafiosoApi.ParseJsonRole(data.role) : null
    );
  },
  /**
   * Функция редактирования существующей роли
   * @constructor
   * @struct
   * @param {number} chat_id Обязательно | ID Чата
   * @param {number} role_id Обязательно | ID Роли
   * @param {?MafiosoApi.Role} role Обязательно | Данные роли
   * @return {MafiosoApi.EditCustomRole}
   */
  EditCustomRole:function(chat_id, role_id, role){
    this.chat_id = chat_id;
    this.role_id = role_id;
    this.role = role;
    return this;
  },
  ParseJsonEditCustomRole:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.EditCustomRole(
      typeof(data.chat_id) === 'number' ? data.chat_id : null,
      typeof(data.role_id) === 'number' ? data.role_id : null,
      typeof(data.role) === 'object' ? MafiosoApi.ParseJsonRole(data.role) : null
    );
  },
  /**
   * Структура, описывающая возможные ограничения в игровом чате
   * @constructor
   * @struct
   * @param {boolean} night Молчание ночью
   * @param {boolean} death Молчание для мёртвых
   * @param {boolean} not_playing Молчание для неиграющих
   * @param {boolean} afk Наказание за неактивность
   * @param {boolean} force Выдать мут за нарушение молчания
   * @return {MafiosoApi.SettingsRestrictions}
   */
  SettingsRestrictions:function(night, death, not_playing, afk, force){
    this.night = night;
    this.death = death;
    this.not_playing = not_playing;
    this.afk = afk;
    this.force = force;
    return this;
  },
  ParseJsonSettingsRestrictions:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.SettingsRestrictions(
      typeof(data.night) === 'boolean' ? data.night : null,
      typeof(data.death) === 'boolean' ? data.death : null,
      typeof(data.not_playing) === 'boolean' ? data.not_playing : null,
      typeof(data.afk) === 'boolean' ? data.afk : null,
      typeof(data.force) === 'boolean' ? data.force : null
    );
  },
  /**
   * Структура, описывающая игровые бонусы
   * @constructor
   * @struct
   * @param {boolean} healing Лекарство
   * @param {boolean} fake_docs Поддельные документы
   * @param {boolean} full_fake_docs Полностью поддельные документы
   * @param {boolean} protect_vote Защита от повешения
   * @param {boolean} invisible Невидимость
   * @param {boolean} protect_freeze Антисоблазнитель
   * @param {boolean} gun Пистолет
   * @param {boolean} bought_roles Купленные роли
   * @return {MafiosoApi.SettingsBonuses}
   */
  SettingsBonuses:function(healing, fake_docs, full_fake_docs, protect_vote, invisible, protect_freeze, gun, bought_roles){
    this.healing = healing;
    this.fake_docs = fake_docs;
    this.full_fake_docs = full_fake_docs;
    this.protect_vote = protect_vote;
    this.invisible = invisible;
    this.protect_freeze = protect_freeze;
    this.gun = gun;
    this.bought_roles = bought_roles;
    return this;
  },
  ParseJsonSettingsBonuses:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.SettingsBonuses(
      typeof(data.healing) === 'boolean' ? data.healing : null,
      typeof(data.fake_docs) === 'boolean' ? data.fake_docs : null,
      typeof(data.full_fake_docs) === 'boolean' ? data.full_fake_docs : null,
      typeof(data.protect_vote) === 'boolean' ? data.protect_vote : null,
      typeof(data.invisible) === 'boolean' ? data.invisible : null,
      typeof(data.protect_freeze) === 'boolean' ? data.protect_freeze : null,
      typeof(data.gun) === 'boolean' ? data.gun : null,
      typeof(data.bought_roles) === 'boolean' ? data.bought_roles : null
    );
  },
  /**
   * Структура, описывающая игровые таймеры
   * @constructor
   * @struct
   * @param {number} discuss Время обсуждения
   * @param {number} night Время ночи
   * @param {number} vote_target Время голосования
   * @param {number} vote_poll Время подтверждения голосования
   * @param {number} start_game Время на регистрацию
   * @return {MafiosoApi.SettingsTimers}
   */
  SettingsTimers:function(discuss, night, vote_target, vote_poll, start_game){
    this.discuss = discuss;
    this.night = night;
    this.vote_target = vote_target;
    this.vote_poll = vote_poll;
    this.start_game = start_game;
    return this;
  },
  ParseJsonSettingsTimers:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.SettingsTimers(
      typeof(data.discuss) === 'number' ? data.discuss : null,
      typeof(data.night) === 'number' ? data.night : null,
      typeof(data.vote_target) === 'number' ? data.vote_target : null,
      typeof(data.vote_poll) === 'number' ? data.vote_poll : null,
      typeof(data.start_game) === 'number' ? data.start_game : null
    );
  },
  /**
   * Структура, описывающая настройки голосования
   * @constructor
   * @struct
   * @param {boolean} hide_actor Скрыть ники проголосовавших
   * @param {boolean} hide_target Скрыть ники тех, за кого проголосовали
   * @return {MafiosoApi.SettingsVote}
   */
  SettingsVote:function(hide_actor, hide_target){
    this.hide_actor = hide_actor;
    this.hide_target = hide_target;
    return this;
  },
  ParseJsonSettingsVote:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.SettingsVote(
      typeof(data.hide_actor) === 'boolean' ? data.hide_actor : null,
      typeof(data.hide_target) === 'boolean' ? data.hide_target : null
    );
  },
  /**
   * Структура, описывающая доступные команды обычным игрокам
   * @constructor
   * @struct
   * @param {boolean} leave Разрешить выходы из игры
   * @param {boolean} new_game Начать регистрацию (классическая игра)
   * @param {boolean} new_team Начать регистрацию (командная игра)
   * @param {boolean} stop_timer Продление регистрации
   * @param {boolean} stop_game Остановить игру/регистрацию
   * @param {boolean} start_game Начать игру
   * @param {boolean} settings Просмотр настроек чата
   * @return {MafiosoApi.SettingsCommands}
   */
  SettingsCommands:function(leave, new_game, new_team, stop_timer, stop_game, start_game, settings){
    this.leave = leave;
    this.new_game = new_game;
    this.new_team = new_team;
    this.stop_timer = stop_timer;
    this.stop_game = stop_game;
    this.start_game = start_game;
    this.settings = settings;
    return this;
  },
  ParseJsonSettingsCommands:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.SettingsCommands(
      typeof(data.leave) === 'boolean' ? data.leave : null,
      typeof(data.new_game) === 'boolean' ? data.new_game : null,
      typeof(data.new_team) === 'boolean' ? data.new_team : null,
      typeof(data.stop_timer) === 'boolean' ? data.stop_timer : null,
      typeof(data.stop_game) === 'boolean' ? data.stop_game : null,
      typeof(data.start_game) === 'boolean' ? data.start_game : null,
      typeof(data.settings) === 'boolean' ? data.settings : null
    );
  },
  /**
   * Структура, описывающая настройки чата
   * @constructor
   * @struct
   * @param {number} max_players Максимальное количество игроков, доступное для регистрации на игру
   * @param {string} language_code Язык чата, на котором будет общаться бот
   * @param {?Array<?MafiosoApi.Emoji>} team_emojis Эмоджи для командных игр
   * @param {?MafiosoApi.SettingsRestrictions} restricts Ограничения в чате
   * @param {?MafiosoApi.SettingsBonuses} bonuses Игровые бонусы
   * @param {?MafiosoApi.SettingsTimers} timers Игровые таймеры
   * @param {?MafiosoApi.SettingsVote} vote Настройки голосования
   * @param {?MafiosoApi.SettingsCommands} commands Доступные команды пользователям не имеющие прав в чате
   * @param {boolean} many_mafia Является ли каждый третий мирный житель мафией (иначе каждый четвёртый)
   * @param {boolean} anonymous_mafia Является ли мафия анонимной
   * @param {boolean} can_kill_allies Союзники могут убивать друг друга
   * @param {boolean} can_skip_day Пропуск дневного действия
   * @param {boolean} can_skip_night Пропуск ночного действия
   * @param {boolean} show_moves Показывать, к кому роли идут ночью
   * @param {boolean} show_death Показывать роли, которые убили ночью
   * @param {boolean} show_alive Показывать список живых
   * @param {boolean} show_heals Показывать лечение ролей
   * @param {boolean} team_president_vote Выборы президента выборщиками в командных играх
   * @param {boolean} holidays Участие в праздничных событиях
   * @param {boolean} deny_mul_playing Запрещать игрокам играть сразу в нескольких играх
   * @return {MafiosoApi.Settings}
   */
  Settings:function(max_players, language_code, team_emojis, restricts, bonuses, timers, vote, commands, many_mafia, anonymous_mafia, can_kill_allies, can_skip_day, can_skip_night, show_moves, show_death, show_alive, show_heals, team_president_vote, holidays, deny_mul_playing){
    this.max_players = max_players;
    this.language_code = language_code;
    this.team_emojis = team_emojis;
    this.restricts = restricts;
    this.bonuses = bonuses;
    this.timers = timers;
    this.vote = vote;
    this.commands = commands;
    this.many_mafia = many_mafia;
    this.anonymous_mafia = anonymous_mafia;
    this.can_kill_allies = can_kill_allies;
    this.can_skip_day = can_skip_day;
    this.can_skip_night = can_skip_night;
    this.show_moves = show_moves;
    this.show_death = show_death;
    this.show_alive = show_alive;
    this.show_heals = show_heals;
    this.team_president_vote = team_president_vote;
    this.holidays = holidays;
    this.deny_mul_playing = deny_mul_playing;
    return this;
  },
  ParseJsonSettings:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.Settings(
      typeof(data.max_players) === 'number' ? data.max_players : null,
      typeof(data.language_code) === 'string' ? data.language_code : null,
      typeof(data.team_emojis) === 'object' && Array.isArray(data.team_emojis) ? data.team_emojis : null,
      typeof(data.restricts) === 'object' ? MafiosoApi.ParseJsonSettingsRestrictions(data.restricts) : null,
      typeof(data.bonuses) === 'object' ? MafiosoApi.ParseJsonSettingsBonuses(data.bonuses) : null,
      typeof(data.timers) === 'object' ? MafiosoApi.ParseJsonSettingsTimers(data.timers) : null,
      typeof(data.vote) === 'object' ? MafiosoApi.ParseJsonSettingsVote(data.vote) : null,
      typeof(data.commands) === 'object' ? MafiosoApi.ParseJsonSettingsCommands(data.commands) : null,
      typeof(data.many_mafia) === 'boolean' ? data.many_mafia : null,
      typeof(data.anonymous_mafia) === 'boolean' ? data.anonymous_mafia : null,
      typeof(data.can_kill_allies) === 'boolean' ? data.can_kill_allies : null,
      typeof(data.can_skip_day) === 'boolean' ? data.can_skip_day : null,
      typeof(data.can_skip_night) === 'boolean' ? data.can_skip_night : null,
      typeof(data.show_moves) === 'boolean' ? data.show_moves : null,
      typeof(data.show_death) === 'boolean' ? data.show_death : null,
      typeof(data.show_alive) === 'boolean' ? data.show_alive : null,
      typeof(data.show_heals) === 'boolean' ? data.show_heals : null,
      typeof(data.team_president_vote) === 'boolean' ? data.team_president_vote : null,
      typeof(data.holidays) === 'boolean' ? data.holidays : null,
      typeof(data.deny_mul_playing) === 'boolean' ? data.deny_mul_playing : null
    );
  },
  /**
   * Функция изменения настроек игры
   * @constructor
   * @struct
   * @param {number} chat_id ID Чата в котором будут изменены настройки
   * @param {?MafiosoApi.Settings} settings Структура, описывающая все настройки чата
   * @return {MafiosoApi.ChangeSettings}
   */
  ChangeSettings:function(chat_id, settings){
    this.chat_id = chat_id;
    this.settings = settings;
    return this;
  },
  ParseJsonChangeSettings:function(data){
    if(typeof(data) !== 'object') return null;
    return new MafiosoApi.ChangeSettings(
      typeof(data.chat_id) === 'number' ? data.chat_id : null,
      typeof(data.settings) === 'object' ? MafiosoApi.ParseJsonSettings(data.settings) : null
    );
  },
  ParseJsonObject:function(data){
    var OBJMAP = {
      'Ok': MafiosoApi.ParseJsonOk,
      'Error': MafiosoApi.ParseJsonError,
      'Emoji': MafiosoApi.ParseJsonEmoji,
      'RoleFractonPeace': MafiosoApi.ParseJsonRoleFractonPeace,
      'RoleFractonMafia': MafiosoApi.ParseJsonRoleFractonMafia,
      'RoleFractonNeutral': MafiosoApi.ParseJsonRoleFractonNeutral,
      'RoleFractonKiller': MafiosoApi.ParseJsonRoleFractonKiller,
      'RoleActionTypeKill': MafiosoApi.ParseJsonRoleActionTypeKill,
      'RoleActionTypeHealing': MafiosoApi.ParseJsonRoleActionTypeHealing,
      'RoleActionTypeFreeze': MafiosoApi.ParseJsonRoleActionTypeFreeze,
      'RoleActionTypeEmpty': MafiosoApi.ParseJsonRoleActionTypeEmpty,
      'RoleListTypeWhiteList': MafiosoApi.ParseJsonRoleListTypeWhiteList,
      'RoleListTypeBlackList': MafiosoApi.ParseJsonRoleListTypeBlackList,
      'RoleSwitchToRoleId': MafiosoApi.ParseJsonRoleSwitchToRoleId,
      'RoleSwitchToVictimRole': MafiosoApi.ParseJsonRoleSwitchToVictimRole,
      'RoleActionSuccess': MafiosoApi.ParseJsonRoleActionSuccess,
      'RoleActionFailed': MafiosoApi.ParseJsonRoleActionFailed,
      'RoleActionProcess': MafiosoApi.ParseJsonRoleActionProcess,
      'RoleAction': MafiosoApi.ParseJsonRoleAction,
      'RoleActionSkip': MafiosoApi.ParseJsonRoleActionSkip,
      'RoleName': MafiosoApi.ParseJsonRoleName,
      'Role': MafiosoApi.ParseJsonRole,
      'AddNewCustomRole': MafiosoApi.ParseJsonAddNewCustomRole,
      'EditCustomRole': MafiosoApi.ParseJsonEditCustomRole,
      'SettingsRestrictions': MafiosoApi.ParseJsonSettingsRestrictions,
      'SettingsBonuses': MafiosoApi.ParseJsonSettingsBonuses,
      'SettingsTimers': MafiosoApi.ParseJsonSettingsTimers,
      'SettingsVote': MafiosoApi.ParseJsonSettingsVote,
      'SettingsCommands': MafiosoApi.ParseJsonSettingsCommands,
      'Settings': MafiosoApi.ParseJsonSettings,
      'ChangeSettings': MafiosoApi.ParseJsonChangeSettings,
    };
    if(typeof(data) === 'object' && typeof(data['ID']) === 'string'){
      var objcall  = OBJMAP[data['ID']];
      return objcall ? objcall(data) : null;
    }
    if(typeof(data) === 'string'){
      var objcall  = OBJMAP[data];
      return objcall ? objcall({}) : null;
    }
    return null;
  },
  ParseJson:function(data){
    return MafiosoApi.ParseJsonObject(JSON.parse(data));
  },
  ToJsonObject:function(data){
    if(!data || typeof(data) !== 'object') return null;
    return data.toData(1);
  }
};
MafiosoApi.Ok.prototype.toData = function(include_id){
  return "Ok";
}
MafiosoApi.Error.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "Error";
  if(this.code) json['code'] = Number(this.code);
  if(this.reason && this.reason.length) json['reason'] = this.reason;
  if(Object.keys(json).length === include_id) return "Error";
  return json;
}
MafiosoApi.Emoji.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "Emoji";
  if(this.emoji && this.emoji.length) json['emoji'] = this.emoji;
  if(this.custom_emoji_id) json['custom_emoji_id'] = Number(this.custom_emoji_id);
  if(Object.keys(json).length === include_id) return "Emoji";
  return json;
}
MafiosoApi.RoleFractonPeace.prototype.toData = function(include_id){
  return "RoleFractonPeace";
}
MafiosoApi.RoleFractonMafia.prototype.toData = function(include_id){
  return "RoleFractonMafia";
}
MafiosoApi.RoleFractonNeutral.prototype.toData = function(include_id){
  return "RoleFractonNeutral";
}
MafiosoApi.RoleFractonKiller.prototype.toData = function(include_id){
  return "RoleFractonKiller";
}
MafiosoApi.RoleActionTypeKill.prototype.toData = function(include_id){
  return "RoleActionTypeKill";
}
MafiosoApi.RoleActionTypeHealing.prototype.toData = function(include_id){
  return "RoleActionTypeHealing";
}
MafiosoApi.RoleActionTypeFreeze.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleActionTypeFreeze";
  if(this.is_force) json['is_force'] = !!this.is_force;
  if(Object.keys(json).length === include_id) return "RoleActionTypeFreeze";
  return json;
}
MafiosoApi.RoleActionTypeEmpty.prototype.toData = function(include_id){
  return "RoleActionTypeEmpty";
}
MafiosoApi.RoleListTypeWhiteList.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleListTypeWhiteList";
  if(this.role_ids && this.role_ids.length) json['role_ids'] = this.role_ids;
  if(Object.keys(json).length === include_id) return "RoleListTypeWhiteList";
  return json;
}
MafiosoApi.RoleListTypeBlackList.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleListTypeBlackList";
  if(this.role_ids && this.role_ids.length) json['role_ids'] = this.role_ids;
  if(Object.keys(json).length === include_id) return "RoleListTypeBlackList";
  return json;
}
MafiosoApi.RoleSwitchToRoleId.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleSwitchToRoleId";
  if(this.role_id) json['role_id'] = Number(this.role_id);
  if(Object.keys(json).length === include_id) return "RoleSwitchToRoleId";
  return json;
}
MafiosoApi.RoleSwitchToVictimRole.prototype.toData = function(include_id){
  return "RoleSwitchToVictimRole";
}
MafiosoApi.RoleActionSuccess.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleActionSuccess";
  if(this.switch_role) json['switch_role'] = MafiosoApi.ToJsonObject(this.switch_role);
  if(this.msg && this.msg.length) json['msg'] = this.msg;
  if(this.msg_victim && this.msg_victim.length) json['msg_victim'] = this.msg_victim;
  if(this.msg_actor && this.msg_actor.length) json['msg_actor'] = this.msg_actor;
  if(Object.keys(json).length === include_id) return "RoleActionSuccess";
  return json;
}
MafiosoApi.RoleActionFailed.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleActionFailed";
  if(this.msg && this.msg.length) json['msg'] = this.msg;
  if(this.msg_victim && this.msg_victim.length) json['msg_victim'] = this.msg_victim;
  if(this.msg_actor && this.msg_actor.length) json['msg_actor'] = this.msg_actor;
  if(Object.keys(json).length === include_id) return "RoleActionFailed";
  return json;
}
MafiosoApi.RoleActionProcess.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleActionProcess";
  if(this.msg && this.msg.length) json['msg'] = this.msg;
  if(this.msg_pm && this.msg_pm.length) json['msg_pm'] = this.msg_pm;
  if(this.msg_chat && this.msg_chat.length) json['msg_chat'] = this.msg_chat;
  if(Object.keys(json).length === include_id) return "RoleActionProcess";
  return json;
}
MafiosoApi.RoleAction.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleAction";
  if(this.name && this.name.length) json['name'] = this.name;
  if(this.type) json['type'] = MafiosoApi.ToJsonObject(this.type);
  if(this.role_allowed) json['role_allowed'] = MafiosoApi.ToJsonObject(this.role_allowed);
  if(this.role_freeze) json['role_freeze'] = MafiosoApi.ToJsonObject(this.role_freeze);
  if(this.count_victims) json['count_victims'] = Number(this.count_victims);
  if(this.cooldown) json['cooldown'] = Number(this.cooldown);
  if(this.process) json['process'] = this.process.toData(0);
  if(this.success) json['success'] = this.success.toData(0);
  if(this.failed) json['failed'] = this.failed.toData(0);
  if(Object.keys(json).length === include_id) return "RoleAction";
  return json;
}
MafiosoApi.RoleActionSkip.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleActionSkip";
  if(this.btn_name && this.btn_name.length) json['btn_name'] = this.btn_name;
  if(this.message && this.message.length) json['message'] = this.message;
  if(Object.keys(json).length === include_id) return "RoleActionSkip";
  return json;
}
MafiosoApi.RoleName.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "RoleName";
  if(this.name && this.name.length) json['name'] = this.name;
  if(this.emoji) json['emoji'] = this.emoji.toData(0);
  if(Object.keys(json).length === include_id) return "RoleName";
  return json;
}
MafiosoApi.Role.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "Role";
  if(this.name) json['name'] = this.name.toData(0);
  if(this.description && this.description.length) json['description'] = this.description;
  if(this.fraction) json['fraction'] = MafiosoApi.ToJsonObject(this.fraction);
  if(this.cash_award) json['cash_award'] = Number(this.cash_award);
  if(this.required_players) json['required_players'] = Number(this.required_players);
  if(this.weight_vote) json['weight_vote'] = Number(this.weight_vote);
  if(this.revenge_kill) json['revenge_kill'] = !!this.revenge_kill;
  if(this.enabled) json['enabled'] = !!this.enabled;
  if(this.msg_select_action && this.msg_select_action.length) json['msg_select_action'] = this.msg_select_action;
  if(this.msg_skip) json['msg_skip'] = this.msg_skip.toData(0);
  if(this.actions && this.actions.length) json['actions'] = [];
  if(this.actions) this.actions.forEach(it => json['actions'].push(it.toData(0)));
  if(Object.keys(json).length === include_id) return "Role";
  return json;
}
MafiosoApi.AddNewCustomRole.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "AddNewCustomRole";
  if(this.chat_id) json['chat_id'] = Number(this.chat_id);
  if(this.role) json['role'] = this.role.toData(0);
  if(Object.keys(json).length === include_id) return "AddNewCustomRole";
  return json;
}
MafiosoApi.EditCustomRole.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "EditCustomRole";
  if(this.chat_id) json['chat_id'] = Number(this.chat_id);
  if(this.role_id) json['role_id'] = Number(this.role_id);
  if(this.role) json['role'] = this.role.toData(0);
  if(Object.keys(json).length === include_id) return "EditCustomRole";
  return json;
}
MafiosoApi.SettingsRestrictions.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "SettingsRestrictions";
  if(this.night) json['night'] = !!this.night;
  if(this.death) json['death'] = !!this.death;
  if(this.not_playing) json['not_playing'] = !!this.not_playing;
  if(this.afk) json['afk'] = !!this.afk;
  if(this.force) json['force'] = !!this.force;
  if(Object.keys(json).length === include_id) return "SettingsRestrictions";
  return json;
}
MafiosoApi.SettingsBonuses.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "SettingsBonuses";
  if(this.healing) json['healing'] = !!this.healing;
  if(this.fake_docs) json['fake_docs'] = !!this.fake_docs;
  if(this.full_fake_docs) json['full_fake_docs'] = !!this.full_fake_docs;
  if(this.protect_vote) json['protect_vote'] = !!this.protect_vote;
  if(this.invisible) json['invisible'] = !!this.invisible;
  if(this.protect_freeze) json['protect_freeze'] = !!this.protect_freeze;
  if(this.gun) json['gun'] = !!this.gun;
  if(this.bought_roles) json['bought_roles'] = !!this.bought_roles;
  if(Object.keys(json).length === include_id) return "SettingsBonuses";
  return json;
}
MafiosoApi.SettingsTimers.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "SettingsTimers";
  if(this.discuss) json['discuss'] = Number(this.discuss);
  if(this.night) json['night'] = Number(this.night);
  if(this.vote_target) json['vote_target'] = Number(this.vote_target);
  if(this.vote_poll) json['vote_poll'] = Number(this.vote_poll);
  if(this.start_game) json['start_game'] = Number(this.start_game);
  if(Object.keys(json).length === include_id) return "SettingsTimers";
  return json;
}
MafiosoApi.SettingsVote.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "SettingsVote";
  if(this.hide_actor) json['hide_actor'] = !!this.hide_actor;
  if(this.hide_target) json['hide_target'] = !!this.hide_target;
  if(Object.keys(json).length === include_id) return "SettingsVote";
  return json;
}
MafiosoApi.SettingsCommands.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "SettingsCommands";
  if(this.leave) json['leave'] = !!this.leave;
  if(this.new_game) json['new_game'] = !!this.new_game;
  if(this.new_team) json['new_team'] = !!this.new_team;
  if(this.stop_timer) json['stop_timer'] = !!this.stop_timer;
  if(this.stop_game) json['stop_game'] = !!this.stop_game;
  if(this.start_game) json['start_game'] = !!this.start_game;
  if(this.settings) json['settings'] = !!this.settings;
  if(Object.keys(json).length === include_id) return "SettingsCommands";
  return json;
}
MafiosoApi.Settings.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "Settings";
  if(this.max_players) json['max_players'] = Number(this.max_players);
  if(this.language_code && this.language_code.length) json['language_code'] = this.language_code;
  if(this.team_emojis && this.team_emojis.length) json['team_emojis'] = [];
  if(this.team_emojis) this.team_emojis.forEach(it => json['team_emojis'].push(it.toData(0)));
  if(this.restricts) json['restricts'] = this.restricts.toData(0);
  if(this.bonuses) json['bonuses'] = this.bonuses.toData(0);
  if(this.timers) json['timers'] = this.timers.toData(0);
  if(this.vote) json['vote'] = this.vote.toData(0);
  if(this.commands) json['commands'] = this.commands.toData(0);
  if(this.many_mafia) json['many_mafia'] = !!this.many_mafia;
  if(this.anonymous_mafia) json['anonymous_mafia'] = !!this.anonymous_mafia;
  if(this.can_kill_allies) json['can_kill_allies'] = !!this.can_kill_allies;
  if(this.can_skip_day) json['can_skip_day'] = !!this.can_skip_day;
  if(this.can_skip_night) json['can_skip_night'] = !!this.can_skip_night;
  if(this.show_moves) json['show_moves'] = !!this.show_moves;
  if(this.show_death) json['show_death'] = !!this.show_death;
  if(this.show_alive) json['show_alive'] = !!this.show_alive;
  if(this.show_heals) json['show_heals'] = !!this.show_heals;
  if(this.team_president_vote) json['team_president_vote'] = !!this.team_president_vote;
  if(this.holidays) json['holidays'] = !!this.holidays;
  if(this.deny_mul_playing) json['deny_mul_playing'] = !!this.deny_mul_playing;
  if(Object.keys(json).length === include_id) return "Settings";
  return json;
}
MafiosoApi.ChangeSettings.prototype.toData = function(include_id){
  var json = {};
  if(include_id) json['ID'] = "ChangeSettings";
  if(this.chat_id) json['chat_id'] = Number(this.chat_id);
  if(this.settings) json['settings'] = this.settings.toData(0);
  if(Object.keys(json).length === include_id) return "ChangeSettings";
  return json;
}
