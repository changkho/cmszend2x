/*
 * CKFinder
 * ========
 * http://ckfinder.com
 * Copyright (C) 2007-2011, CKSource - Frederico Knabben. All rights reserved.
 *
 * The software, this file and its contents are subject to the CKFinder
 * License. Please read the license.txt file before using, installing, copying,
 * modifying or distribute this file or part of its contents. The contents of
 * this file is part of the Source Code of CKFinder.
 *
 */

/**
 * @fileOverview Defines the {@link CKFinder.lang} object, for the English
 *		language. This is the base file for all translations.
 */

/**
 * Constains the dictionary of language entries.
 * @namespace
 */
CKFinder.lang['vi'] =
{
	appTitle : 'CKFinder',

	// Common messages and labels.
	common :
	{
		// Put the voice-only part of the label in the span.
		unavailable			: '%1<span class="cke_accessibility">, unavailable</span>',
		confirmCancel		: 'Một vài tùy chọn đã thay đổi. Bạn có muốn đóng khung này?',
		ok						: 'Chấp nhận',
		cancel				: 'Hủy',
		confirmationTitle	: 'Xác nhận',
		messageTitle		: 'Thông tin',
		inputTitle			: 'Câu hỏi',
		undo					: 'Undo',
		redo					: 'Redo',
		skip					: 'Bỏ qua',
		skipAll				: 'Bỏ qua tất cả',
		makeDecision		: 'What action should be taken?',
		rememberDecision	: 'Ghi nhớ quyết đinh'
	},


	dir : 'ltr',
	HelpLang : 'vi',
	LangCode : 'vi',

	// Date Format
	//		d    : Day
	//		dd   : Day (padding zero)
	//		m    : Month
	//		mm   : Month (padding zero)
	//		yy   : Year (two digits)
	//		yyyy : Year (four digits)
	//		h    : Hour (12 hour clock)
	//		hh   : Hour (12 hour clock, padding zero)
	//		H    : Hour (24 hour clock)
	//		HH   : Hour (24 hour clock, padding zero)
	//		M    : Minute
	//		MM   : Minute (padding zero)
	//		a    : Firt char of AM/PM
	//		aa   : AM/PM
	DateTime : 'dd/mm/yyyy hh:MM aa',
	DateAmPm : ['AM','PM'],

	// Folders
	FoldersTitle	: 'Thư mục',
	FolderLoading	: 'Đang tải...',
	FolderNew		: 'Xin nhập tên thư mục mới: ',
	FolderRename	: 'Xin nhập tên mới cho thư mục: ',
	FolderDelete	: 'Bạn có chắc muốn xóa thư mục "%1"?',
	FolderRenaming	: ' (Đang đổi tên...)',
	FolderDeleting	: ' (Đang hủy...)',

	// Files
	FileRename		: 'Xin nhập tên tập tin mới: ',
	FileRenameExt	: 'Bạn có chắc muốn đổi tên mở rộng của tập tin? Khả năng sẽ không dùng được',
	FileRenaming	: 'Đang đổi tên...',
	FileDelete		: 'Bạn có chắc muốn hủy tập tin "%1"?',
	FilesLoading	: 'Đang tải...',
	FilesEmpty		: 'Thư mục rỗng',
	FilesMoved		: 'Tập tin %1 đã được chuyển đến %2:%3',
	FilesCopied		: 'Tập tin %1 đã được sao chép sangg %2:%3',

	// Basket
	BasketFolder				: 'Giỏ',
	BasketClear					: 'Làm sạch giỏ',
	BasketRemove				: 'Hủy khỏi giỏ',
	BasketOpenFolder			: 'Thư mục cấp trên',
	BasketTruncateConfirm 	: 'Bạn có chắc muốn hủy tất cả tập tin khỏi giỏ?',
	BasketRemoveConfirm		: 'Bạn có chắc muốn hủy tập tin "%1" khỏi giỏ?',
	BasketEmpty					: 'Chưa có tập tin nào trong giỏ.',
	BasketCopyFilesHere		: 'Sao chép (các) tập tin từ giỏ',
	BasketMoveFilesHere		: 'Chuyển (các) tập tin từ giỏ',

	BasketPasteErrorOther	: 'Tập tin %s lỗi: %e',
	BasketPasteMoveSuccess	: 'Các tập tin sau đã được chuyển: %s',
	BasketPasteCopySuccess	: 'Các tập tin sau đã được sao chép: %s',

	// Toolbar Buttons (some used elsewhere)
	Upload		: 'Tải lên',
	UploadTip	: 'Tải tập tin mới',
	Refresh		: 'Làm mới',
	Settings		: 'Thiết lập',
	Help			: 'Trợ giúp',
	HelpTip		: 'Help',

	// Context Menus
	Select			: 'Chọn',
	SelectThumbnail : 'Chọn thu nhỏ',
	View			: 'Xem',
	Download		: 'Tải về',

	NewSubFolder	: 'Thư mục con mới',
	Rename			: 'Đổi tên',
	Delete			: 'Xóa',

	CopyDragDrop	: 'Sao chép tập tin',
	MoveDragDrop	: 'Di chuyển tập tin',

	// Dialogs
	RenameDlgTitle		: 'Đổi tên',
	NewNameDlgTitle		: 'Tên mới',
	FileExistsDlgTitle	: 'Tập tin đã tồn tại',
	SysErrorDlgTitle : 'Lỗi hệ thống',

	FileOverwrite	: 'Ghi đè',
	FileAutorename	: 'Tự động đổi tên',

	// Generic
	OkBtn		: 'Chấp nhận',
	CancelBtn	: 'Hủy',
	CloseBtn	: 'Đóng',

	// Upload Panel
	UploadTitle				: 'Tải lên tập tin mới',
	UploadSelectLbl		: 'Chọn tập tin để tải lên',
	UploadProgressLbl		: '(Đang thực hiện, vui lòng chờ...)',
	UploadBtn				: 'Tải lên tập tin đã chọn',
	UploadBtnCancel		: 'Hủy',

	UploadNoFileMsg		: 'Xin chọn tập tin từ máy tính của bạn',
	UploadNoFolder			: 'Xin xác định thư mục trước khi tải tập tin.',
	UploadNoPerms			: 'Tập tin không được phép tải lên.',
	UploadUnknError		: 'Lỗi trong quá trình gửi tập tin.',
	UploadExtIncorrect	: 'Định dạng tập tin này không được phép tải lên thư mục này.',

	// Settings Panel
	SetTitle			: 'Thiết lập',
	SetView			: 'Xem:',
	SetViewThumb	: 'Thu nhỏ',
	SetViewList		: 'Danh sách',
	SetDisplay		: 'Hiển thị:',
	SetDisplayName	: 'Tên tập tin',
	SetDisplayDate	: 'Ngày',
	SetDisplaySize	: 'Kích thước tập tin',
	SetSort			: 'Sắp xếp:',
	SetSortName		: 'theo tên tập tin',
	SetSortDate		: 'theo ngày',
	SetSortSize		: 'theo kích thước',

	// Status Bar
	FilesCountEmpty : '<Thư mục rỗng>',
	FilesCountOne	: '1 tập tin',
	FilesCountMany	: '%1 tập tin',

	// Size and Speed
	Kb				: '%1 kB',
	KbPerSecond		: '%1 kB/s',

	// Connector Error Messages.
	ErrorUnknown	: 'Yêu cầu không thể thực hiện được. (Lỗi %1)',
	Errors :
	{
	 10 : 'Invalid command.',
	 11 : 'The resource type was not specified in the request.',
	 12 : 'The requested resource type is not valid.',
	102 : 'Invalid file or folder name.',
	103 : 'It was not possible to complete the request due to authorization restrictions.',
	104 : 'It was not possible to complete the request due to file system permission restrictions.',
	105 : 'Invalid file extension.',
	109 : 'Invalid request.',
	110 : 'Unknown error.',
	115 : 'A file or folder with the same name already exists.',
	116 : 'Folder not found. Please refresh and try again.',
	117 : 'File not found. Please refresh the files list and try again.',
	118 : 'Source and target paths are equal.',
	201 : 'A file with the same name is already available. The uploaded file has been renamed to "%1"',
	202 : 'Invalid file',
	203 : 'Invalid file. The file size is too big.',
	204 : 'The uploaded file is corrupt.',
	205 : 'No temporary folder is available for upload in the server.',
	206 : 'Upload cancelled for security reasons. The file contains HTML like data.',
	207 : 'The uploaded file has been renamed to "%1"',
	300 : 'Moving file(s) failed.',
	301 : 'Copying file(s) failed.',
	500 : 'The file browser is disabled for security reasons. Please contact your system administrator and check the CKFinder configuration file.',
	501 : 'The thumbnails support is disabled.'
	},

	// Other Error Messages.
	ErrorMsg :
	{
		FileEmpty		: 'Tên tập tin không được phép rỗng',
		FileExists		: 'Tập tin %s đã tồn tại',
		FolderEmpty		: 'Tên thư mục không được phép rỗng',

		FileInvChar		: 'Tên tập tin không được chứa các ký tự sau: \n\\ / : * ? " < > |',
		FolderInvChar	: 'Tên thư mục không được chứa các ký tự sau: \n\\ / : * ? " < > |',

		PopupBlockView	: 'Không thể mở cửa sổ mới. Xin tắt chức năng chặn popup của trình duyệt trước.'
	},

	// Imageresize plugin
	Imageresize :
	{
		dialogTitle			: 'Đổi kích thước %s',
		sizeTooBig			: 'Không thể thiết lập kích thước hình lớn hơn kích thước gốc (%size).',
		resizeSuccess		: 'Đổi kích thước hình thành công.',
		thumbnailNew		: 'Tạo hình thu nhỏ',
		thumbnailSmall		: 'Nhỏ (%s)',
		thumbnailMedium	: 'Trung bình (%s)',
		thumbnailLarge		: 'Lớn (%s)',
		newSize				: 'Thiết lập kích thước mới',
		width					: 'Chiều rộng',
		height				: 'Chiều cao',
		invalidHeight		: 'Chiều cao không hợp lệ.',
		invalidWidth		: 'Chiều rộng không hợp lệ.',
		invalidName			: 'Tên tập tin không hợp lệ.',
		newImage				: 'Tạo ảnh mới',
		noExtensionChange : 'Không thể thay đổi định dạng của tập tin.',
		imageSmall			: 'Hình gốc quá nhỏ',
		contextMenuName	: 'Đổi kích thước'
	},

	// Fileeditor plugin
	Fileeditor :
	{
		save					: 'Lưu',
		fileOpenError		: 'Không thể mở tập tin.',
		fileSaveSuccess	: 'Lưu tập tin thành công.',
		contextMenuName	: 'Điều chỉnh',
		loadingFile			: 'Đang tải tập tin, vui lòng chờ...'
	}
};